var Task = require('../task');
var assert = require('assert');
var Enums = require('../enums');

describe('Task', function() {

  var killWolf;

  beforeEach(function(){
    var taskDetail = {
      description: "Kill a wolf",
      difficulty: Enums.DIFFICULTY.HARD,
      urgency: Enums.URGENCY.HIGH,
      reward: "Bravery boost",
      complete: false
    }
    killWolf = new Task(taskDetail);
  })

  it('should have a description', function() {
    assert.strictEqual(killWolf.description, "Kill a wolf");
  });

  it('should have a difficulty level', function() {
    assert.strictEqual(killWolf.difficulty, Enums.DIFFICULTY.HARD);
  });

  it('should have a urgency level', function() {
    assert.strictEqual(killWolf.urgency, Enums.URGENCY.HIGH);
  });

  it('should have a reward', function(){
    assert.strictEqual(killWolf.reward, "Bravery boost");    
  });

  it('should start as not complete', function() {
    assert.strictEqual(killWolf.complete, false);    
  });

  it('should be able to be marked complete', function() {
    killWolf.markComplete()
    assert(killWolf.complete);
  });

});
