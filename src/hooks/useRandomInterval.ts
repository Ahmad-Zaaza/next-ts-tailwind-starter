import { randomNumber } from "@/utils/helpers/helpers";
import { useCallback, useEffect, useRef } from "react";

export const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null
) => {
  const timeoutId = useRef<any>(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    let isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const handleTick = () => {
        if (minDelay && maxDelay) {
          const nextTickAt = randomNumber(minDelay, maxDelay);
          timeoutId.current = window.setTimeout(() => {
            savedCallback.current();
            handleTick();
          }, nextTickAt);
        }
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};
