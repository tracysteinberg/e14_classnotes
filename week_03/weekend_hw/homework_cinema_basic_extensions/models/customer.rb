require_relative('../db/sql_runner')

class Customer

  attr_reader :id, :name, :funds

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
    @funds = options['funds'].to_f
  end

  def save()
    sql = "INSERT INTO customers (name, funds) VALUES ('#{@name}',#{@funds}) RETURNING *"
    customer = SqlRunner.run(sql).first
    @id = customer['id'].to_i
  end

  def films()
    sql = "SELECT films.* FROM films INNER JOIN tickets ON tickets.film_id = films.id WHERE tickets.customer_id = #{@id}"
    return Film.map_items(sql)
  end

  def number_of_tickets_bought()
    return films().count
  end

  def self.all()
    sql = "SELECT * FROM customers"
    return Customer.map_items(sql)
  end

  def self.delete_all()
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end


  #Helper methods for mapping
  def self.map_items(sql)
    customers = SqlRunner.run(sql)
    result = customers.map { |customer| Customer.new( customer ) }
    return result
  end

  def self.map_item(sql)
    result = Customer.map_items(sql)
    return result.first
  end

end