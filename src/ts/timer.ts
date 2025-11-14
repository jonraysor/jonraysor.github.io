/**
 * Timer/counter functionality for tracking time since start date
 */

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeSince(startDate: Date): TimeUnits {
  const now = new Date().getTime();
  const distance = now - startDate.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function formatTimeUnits(time: TimeUnits): string {
  return `${time.days}d, ${time.hours}h, ${time.minutes}m ${time.seconds}s`;
}

export function initializeTimer(elementId: string, startDateString: string): void {
  const counterElement = document.getElementById(elementId);

  if (!counterElement) {
    console.warn(`Counter element with id "${elementId}" not found`);
    return;
  }

  const startDate = new Date(startDateString);

  const updateCounter = (): void => {
    const time = calculateTimeSince(startDate);
    counterElement.innerHTML = formatTimeUnits(time);
  };

  // Update immediately
  updateCounter();

  // Update every second
  setInterval(updateCounter, 1000);
}
