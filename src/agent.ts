import { blModel, blTools, logger } from '@blaxel/sdk';
import { streamText, tool } from 'ai';
import { z } from 'zod';

interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(input: string, stream: Stream): Promise<void> {
  const response = streamText({
    experimental_telemetry: { isEnabled: true },
    model: await blModel("{{.Model}}").ToVercelAI(),
    tools: {
      ...await blTools(['blaxel-search']).ToVercelAI(),
      "weather": tool({
        description: "Get the weather in a specific city",
        parameters: z.object({
          city: z.string(),
        }),
        execute: async (args: { city: string }) => {
          logger.debug("TOOLCALLING: local weather", args);
          return `The weather in ${args.city} is sunny`;
        },
      }),
    },
    system: "If the user ask for the weather, use the weather tool.",
    messages: [
      { role: 'user', content: input }
    ],
    maxSteps: 5,
  });

  for await (const delta of response.textStream) {
    stream.write(delta);
  }
  stream.end();
}
