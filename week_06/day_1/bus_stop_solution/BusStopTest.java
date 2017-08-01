import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BusStopTest {

    BusStop busStop;
    Person person;
    Bus bus;

    @Before
    public void before() {
        busStop = new BusStop();
        person = new Person();
        bus = new Bus(31);
    }

    @Test
    public void canAddPeople() {
        busStop.add(person);
        assertEquals(1, busStop.personCount());
    }

    @Test
    public void isFullReturnsTrueWhenQueueIsFull() {
        for (int i = 0; i < 5; i++) {
            busStop.add(person);
        }
        assertEquals(true, busStop.isFull());
    }

    @Test
    public void canAddPassengersToBus() {
        busStop.add(person);
        busStop.addPassengersToBus(bus);
        assertEquals(1, bus.passengerCount());
    }

    @Test
    public void peopleAreRemovedFromQueueWhenAddedToBus() {
        busStop.add(person);
        busStop.addPassengersToBus(bus);
        assertEquals(0, busStop.personCount());
    }

}
