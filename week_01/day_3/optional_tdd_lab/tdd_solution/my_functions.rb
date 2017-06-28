def add_array_lengths( array1, array2 )
  return array1.length + array2.length
end

def sum_array( numbers )
  sum = 0
  for number in numbers
    sum += number
  end
  return sum
end

def find_item( array, item )
  for element in array
    if element == item
      return true
    end
  end
  return false
end

def get_first_key( teachers_wallets )
  teachers_wallets_keys = teachers_wallets.keys
  first_key = teachers_wallets_keys.first()
end
