// festivals.js

// Fixed version
export function getFestivals(year = new Date().getFullYear()) {
  // You can add more festivals if needed
  return [
    {
      id: "festival-2025-01-26",
      title: "Republic Day",
      start: "2025-01-26",
      end: "2025-01-26",
      allDay: true,
      type: "festival",
      description: "National holiday celebrating the Constitution of India",
      className: "festival-event",
    },
    {
      id: "festival-2025-03-14",
      title: "Holi",
      start: "2025-03-14",
      end: "2025-03-14",
      allDay: true,
      type: "festival",
      description: "Festival of colors",
      className: "festival-event",
    },
    {
      id: "festival-2025-08-15",
      title: "Independence Day",
      start: "2025-08-15",
      end: "2025-08-15",
      allDay: true,
      type: "festival",
      description: "Celebrating India's independence from British rule",
      className: "festival-event",
    },
    {
      id: "festival-2025-10-02",
      title: "Gandhi Jayanti",
      start: "2025-10-02",
      end: "2025-10-02",
      allDay: true,
      type: "festival",
      description: "Birthday of Mahatma Gandhi",
      className: "festival-event",
    },
    {
      id: "festival-2025-11-01",
      title: "Diwali",
      start: "2025-11-01",
      end: "2025-11-01",
      allDay: true,
      type: "festival",
      description: "Festival of lights",
      className: "festival-event",
    },
    {
      id: "festival-2025-12-25",
      title: "Christmas",
      start: "2025-12-25",
      end: "2025-12-25",
      allDay: true,
      type: "festival",
      description: "Celebration of the birth of Jesus Christ",
      className: "festival-event",
    },
  ];
}
