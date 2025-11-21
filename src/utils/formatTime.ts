/**
 * A function to format the time as: 00:00
 *
 * @param {number} time - The time in seconds
 * @returns {string} - The time formatted to show leading 0s
 */
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};
