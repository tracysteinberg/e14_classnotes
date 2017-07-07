require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(pet_name)
    pet_found = @pets.find { |pet| pet.name == pet_name}
    return pet_found.type  
  end

  def get_names_of_all_pets_of_type(pet_type)
    pets_of_type = @pets.find { |pet| pet.type == pet_type }
    return pets_of_type.map { |pet| pet.name}
  end

  def get_number_of_pets_costing_at_least(amount)
    @pets.select { |pet| pet.price >= amount }
    return @pets.count
  end
end