public class Bus {

    private int number;
    private Person[] passengers;

    public Bus(int number) {
        this.number = number;
        this.passengers = new Person[25];
    }

    public int getNumber() {
        return number;
    }

    public void add(Person person) {
        if (isFull()) {
            return;
        }

        int index = passengerCount();
        passengers[index] = person;
    }

    public int passengerCount() {
        int count = 0;

        for (Person person : this.passengers) {
            if (person != null) {
                count++;
            }
        }

        return count;
    }

    public boolean isFull() {
        return passengerCount() == passengers.length;
    }

}
