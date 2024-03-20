class FlightBookingSystem {
    constructor(agencyName) {
      this.agencyName = agencyName;
      this.flights = [];
      this.bookings = [];
      this.bookingsCount = 0;
    }
  
    addFlight(flightNumber, destination, departureTime, price) {
      const existingFlight = this.flights.find((flight) => flight.flightNumber === flightNumber);
      if (existingFlight) {
        return `Flight ${flightNumber} to ${destination} is already available.`;
      } else {
        const newFlight = {
          flightNumber,
          destination,
          departureTime,
          price
        };
        this.flights.push(newFlight);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
      }
    }
  
    bookFlight(passengerName, flightNumber) {
      const flight = this.flights.find((flight) => flight.flightNumber === flightNumber);
      if (!flight) {
        return `Flight ${flightNumber} is not available for booking.`;
      } else {
        const booking = {
          passengerName,
          flightNumber
        };
        this.bookings.push(booking);
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
      }
    }
  
    cancelBooking(passengerName, flightNumber) {
      const index = this.bookings.findIndex(
        (booking) => booking.passengerName === passengerName && booking.flightNumber === flightNumber
      );
      if (index === -1) {
        throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
      } else {
        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
      }
    }
  
    showBookings(criteria) {
      if (this.bookings.length === 0) {
        throw new Error('No bookings have been made yet.');
      }
  
      if (criteria === 'all') {
        const bookingsInfo = this.bookings.map((booking) => `${booking.passengerName} booked for flight ${booking.flightNumber}.`);
        return [`All bookings(${this.bookingsCount}):`, ...bookingsInfo];
      }
  
      const priceThreshold = criteria === 'cheap' ? 100 : 1000000;
      const filteredBookings = this.bookings.filter(
        (booking) => this.flights.find((flight) => flight.flightNumber === booking.flightNumber).price <= priceThreshold
      );
  
      if (filteredBookings.length === 0) {
        return `No ${criteria} bookings found.`;
      }
  
      const bookingsInfo = filteredBookings.map((booking) => `${booking.passengerName} booked for flight ${booking.flightNumber}.`);
      return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings:`, ...bookingsInfo];
    }
  }
  
  const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("all"));
  console.log(system.showBookings("cheap"));
  console.log(system.showBookings("expensive"));
  console.log(system.cancelBooking("Alice", "AA101"));
  console.log(system.showBookings("all"));
  