import { createContext } from "react";
import { ClientAIConfig, LogEvent, LogEventData } from "../shared/types";

/**
 * Context for overall editor config state. This context should
 * be memoized to prevent unnecessary re-renders
 */
const AIConfigContext = createContext<{
  getState: () => ClientAIConfig;
  logEventHandler?: (event: LogEvent, data?: LogEventData) => void;
}>({
  getState: () => ({ prompts: [], _ui: { isDirty: false } }),
});

export default AIConfigContext;
