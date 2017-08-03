import static org.junit.Assert.*;
import org.junit.*;
import jewellery.*;

public class RingTest {

  Ring ring;
  
  @Before 
  public void before(){
    ring = new Ring(MetalType.GOLD, GemType.SAPPHIRE);
  }

  @Test
  public void canGetMetal(){
    assertEquals(MetalType.GOLD,ring.getMetal());
  }


  @Test
  public void canGetGem(){
    assertEquals(GemType.SAPPHIRE, ring.getGem());
  }
  
}