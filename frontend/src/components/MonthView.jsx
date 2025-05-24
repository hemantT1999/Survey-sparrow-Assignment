{
  events.map((event) => (
    <EventCard
      key={event._id || event.id || Date.now()} // Use existing ID or generate a temporary one
      event={event}
      onDelete={onEventDelete}
    />
  ));
}

<div className="grid grid-cols-7 gap-1">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
    <div key={day} className="text-center font-medium text-gray-800 py-2">
      {day}
    </div>
  ))}
</div>;
