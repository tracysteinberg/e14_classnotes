public class BusStop {

    private Person[] queue;

    public BusStop() {
        this.queue = new Person[5];
    }

    public void add(Person person) {
        int index = personCount();
        queue[index] = person;
    }

    public int personCount() {
        int count = 0;

        for (Person person : queue) {
            if (person != null) {
                count++;
            }
        }

        return count;
    }

    public boolean isFull() {
        return personCount() == queue.length;
    }

    public void addPassengersToBus(Bus bus) {
        for (int i = 0; i < queue.length; i++) {
            if (queue[i] != null) {
                bus.add(queue[i]);
                queue[i] = null;
            }
        }
    }

}
