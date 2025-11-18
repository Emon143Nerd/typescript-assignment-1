const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return "'Name: " + this.name + ", " + "Age: " + this.age + "';";
  }
}

const filterByRating = (books: { title: string; rating: number }[]) => {
  const newArr = books.filter((book) => {
    return book.rating >= 4 && book.rating <= 5;
  });
  return newArr;
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
) => {
  const activeUsers = users.filter((user) => {
    return user.isActive === true;
  });
  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    "Title: " + book.title + ", " + "Author: " + book.author + ", " + "Published: " 
    + book.publishedYear + ", " + "Available: " + (book.isAvailable ? "Yes" : "No")
  );
};

const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
) => {
  let uniqArr: (number | string)[] = [];

  arr1.forEach((element) => {
    let exists = false;
    uniqArr.forEach((item) => {
      if (item === element) {
        exists = true;
      }
    });
    if (exists === false) {
      uniqArr.push(element);
    }
  });

  arr2.forEach((element) => {
    let exists = false;
    uniqArr.forEach((item) => {
      if (item === element) {
        exists = true;
      }
    });
    if (exists === false) {
      uniqArr.push(element);
    }
  });

  return uniqArr;
};

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
) => {
  if (products.length === 0) {
    return 0;
  }
  return products.reduce((acc, item) => {
    const discount = item.discount || 0;
    const totalPrice = item.price * item.quantity * (1 - discount / 100);
    return acc + totalPrice;
  }, 0);
};
