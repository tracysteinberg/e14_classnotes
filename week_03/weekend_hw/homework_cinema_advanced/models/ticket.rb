require_relative('../db/sql_runner')

class Ticket

  attr_reader :id, :customer_id, :screening_id

  def initialize(options)
    @id = options['id'].to_i
    @customer_id = options['customer_id'].to_i
    @screening_id = options['screening_id'].to_i
  end

  def save()
    sql = "INSERT INTO tickets (customer_id, screening_id) VALUES (#{@customer_id}, #{@screening_id}) RETURNING *"
    ticket = SqlRunner.run(sql).first
    @id = ticket['id'].to_i
  end 

  def film()
    sql = "SELECT films.* FROM films INNER JOIN screenings ON films.id = screenings.film_id WHERE screenings.id = #{@screening_id}"
    film = Film.map_item(sql)
    return film
  end

  def customer()
    sql = "SELECT * FROM customers WHERE customers.id = #{@customer_id}"
    customer = Customer.map_item(sql)
    return customer
  end

  def self.all()
    sql = "SELECT * FROM tickets"
    return Ticket.map_items(sql)
  end

  def self.delete_all()
    sql = "DELETE FROM tickets"
    SqlRunner.run(sql)
  end

  #Helper methods for mapping
  def self.map_items(sql)
    tickets = SqlRunner.run(sql)
    result = tickets.map { |ticket| Ticket.new( ticket ) }
    return result
  end

  def self.map_item(sql)
    result = Ticket.map_items(sql)
    return result.first
  end

end