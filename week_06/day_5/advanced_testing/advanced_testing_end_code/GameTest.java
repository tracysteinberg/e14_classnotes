import static org.junit.Assert.*;
import org.junit.*;
import org.mockito.*;
import static org.mockito.Mockito.*;

public class GameTest {

  Game game;
  Rollable spyDice;
  
  @Before 
    public void before(){
    Rollable dice = new Dice(6);
    spyDice = Mockito.spy(dice);
    game = new Game(spyDice);
  }

  @Test
  public void testTakeTurnFailureStub(){
    Mockito.when(spyDice.roll()).thenReturn(2);

    boolean result = game.nextTurn();
    assertEquals(false, result);
  }

  @Test
  public void testTakeTurnSuccessStub(){
    Mockito.when(spyDice.roll()).thenReturn(3);

    boolean result = game.nextTurn();
    assertEquals(true, result);
  }

  @Test
  public void takeTurnMock(){
    Rollable diceMock = mock(Rollable.class);
    game = new Game(diceMock);

    game.nextTurn();
    
    assertEquals(1, game.getTurnCount());
    verify(diceMock, times(1)).roll();  
  }
  
}
