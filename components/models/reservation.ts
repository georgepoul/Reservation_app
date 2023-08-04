class Reservation {
    name: string;
    from: string;
    to: string;
    address: string;
    room: string;
    id: string;


    constructor(name: string, from: string, to: string, address: string, room: string, id: string) {
        this.name = name;
        this.from = from;
        this.to = to;
        this.address = address;
        this.room = room;
        this.id = id;
    }
}

export default Reservation;