import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BusTest {

    Bus bus;
    Person person;

    @Before
    public void before() {
        bus = new Bus(31);
        person = new Person();
    }

    @Test
    public void canHaveNumber() {
        assertEquals(31, bus.getNumber());
    }

    @Test
    public void canAddPassengers() {
        bus.add(person);
        assertEquals(1, bus.passengerCount());
    }

    @Test
    public void isFullReturnsTrueWhenPassengersIsFull() {
        for (int i = 0; i < 25; i++) {
            bus.add(person);
        }
        assertEquals(true, bus.isFull());
    }

}
