import { blModel, blTools } from "@blaxel/vercel";
import { stepCountIs, streamText, tool } from "ai";
import { z } from "zod";

interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(
  input: string,
  stream: Stream
): Promise<void> {
  const response = streamText({
    experimental_telemetry: { isEnabled: true },
    model: await blModel("sandbox-openai"),
    tools: {
      ...(await blTools(["blaxel-search"])),
      weather: tool({
        description: "Get the weather in a specific city",
        inputSchema: z.object({
          city: z.string(),
        }),
        execute: async (args: { city: string }) => {
          console.debug("TOOLCALLING: local weather", args);
          return `The weather in ${args.city} is sunny`;
        },
      }),
    },
    system: "If the user ask for the weather, use the weather tool.",
    messages: [{ role: "user", content: input }],
    stopWhen: stepCountIs(5)
  });

  for await (const delta of response.textStream) {
    stream.write(delta);
  }
  stream.end();
}
