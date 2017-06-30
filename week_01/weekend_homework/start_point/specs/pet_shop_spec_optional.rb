require 'minitest/autorun'
require_relative '../pet_shop'

class TestPetShop < Minitest::Test

  def setup

    @customers = [
      {
        name: "Craig",
        pets: [],
        cash: 1000
      },
      {
        name: "Zsolt",
        pets: [],
        cash: 50
      }
    ]

    @new_pet = {
            name: "Bors the Younger",
            pet_type: :cat,
            breed: "Cornish Rex",
            price: 100
          }

    @pet_shop = {
        pets: [
          {
            name: "Sir Percy",
            pet_type: :cat,
            breed: "British Shorthair",
            price: 500
          },
          {
            name: "King Bagdemagus",
            pet_type: :cat,
            breed: "British Shorthair",
            price: 500
          },
          {
            name: "Sir Lancelot",
            pet_type: :dog,
            breed: "Pomsky",
            price: 1000,
          },
          {
            name: "Arthur",
            pet_type: :dog,
            breed: "Husky",
            price: 900,
          },
          {
            name: "Tristan",
            pet_type: :dog,
            breed: "Basset Hound",
            price: 800,
          },
          {
            name: "Merlin",
            pet_type: :cat,
            breed: "Egyptian Mau",
            price: 1500,
          }
        ],
        admin: {
          total_cash: 1000,
          pets_sold: 0,
        },
        name: "Camelot of Pets"
      }
  end


# def test_customer_can_afford_pet__insufficient_funds
#   customer = @customers[1]
#   can_buy_pet = customer_can_afford_pet(customer, @new_pet)
#   assert_equal(false, can_buy_pet)
# end

# def test_customer_can_afford_pet__sufficient_funds
#   customer = @customers[0]
#   can_buy_pet = customer_can_afford_pet(customer, @new_pet)
#   assert_equal(true, can_buy_pet)
# end

# #These are 'integration' tests so we want multiple asserts.
# #If one fails the entire test should fail
# def test_sell_pet_to_customer__pet_found
#   customer = @customers[0]
#   pet = find_pet_by_name(@pet_shop,"Arthur")

#   sell_pet_to_customer(@pet_shop, pet, customer)

#   assert_equal(1, customer_pet_count(customer))
#   assert_equal(1, pets_sold(@pet_shop))
#   assert_equal(1900, total_cash(@pet_shop))
# end

# def test_sell_pet_to_customer__pet_not_found
#   customer = @customers[0]
#   pet = find_pet_by_name(@pet_shop,"Dave")

#   sell_pet_to_customer(@pet_shop, pet, customer)

#   assert_equal(0, customer_pet_count(customer))
#   assert_equal(0, pets_sold(@pet_shop))
#   assert_equal(1000, total_cash(@pet_shop))
# end

# def test_sell_pet_to_customer__insufficient_funds
#   customer = @customers[1]
#   pet = find_pet_by_name(@pet_shop,"Arthur")

#   sell_pet_to_customer(@pet_shop, pet, customer)

#   assert_equal(0, customer_pet_count(customer))
#   assert_equal(0, pets_sold(@pet_shop))
#   assert_equal(1000, total_cash(@pet_shop))
# end

end
