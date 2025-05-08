## Q: 01. What are some differences between interfaces and types in TypeScript?

Ans:
Interface vs Type in TypeScript – Differences and Use Cases

In TypeScript, both interfaces and type aliases are used to define the shape or structure of objects. At first glance, they seem very similar, but there are some important differences that matter depending on the situation.

Extension or Merging
Interface – Can be extended easily: ts Copy Edit interface Person { name: string; age: number; } interface Employee extends Person { department: string; }
Here, Employee extends Person and adds an extra property.

Type – Uses intersection for merging:
ts
Copy
Edit
type Person = {
name: string;
age: number;
};

type Employee = Person & {
department: string;
};
In this case, & merges the two types to create the final Employee type.

2. Declaration and Merging Behavior
   Interface – Supports multiple declarations (merged automatically):
   ts
   Copy
   Edit
   interface User {
   name: string;
   }

interface User {
age: number;
}

// Final User = { name: string; age: number }
Declaring the same interface more than once merges all the properties.

Type – Cannot be declared multiple times:
ts
Copy
Edit
type User = {
name: string;
};

type User = {
age: number;
}; // Error: Duplicate identifier 'User'
Declaring the same type alias again causes a TypeScript error.

3. When Should You Use Interface vs Type?
   Use Interface:
   When defining the structure of an object.

If you plan to extend or merge it later.

Interfaces are better suited for working with classes and object-oriented design.

Use Type:
When you need advanced type features like unions (|), intersections (&), tuples, or primitive types.

Type aliases can define a wide range of data types, not just objects.

ts
Copy
Edit
// Union Type:
type Status = "active" | "inactive";

// Tuple Type:
type Point = [number, number];

// Function Type:
type Add = (a: number, b: number) => number;

## Q: 02. What is type inference in TypeScript? Why is it helpful?

Ans:
Type Inference in TypeScript: Explained Simply

In TypeScript, type inference means that the compiler can automatically figure out the type of a variable even if we don’t explicitly write it.

For example:

ts
Copy
Edit
let name = "Sifat";
Here, we didn’t write string, but TypeScript understands that name is a string because we assigned it a string value. So under the hood, it treats this as:

ts
Copy
Edit
let name: string = "Sifat";
This is type inference in action.

Why is it helpful?
Type inference is helpful for a few reasons:

Less code, cleaner syntax:
You don’t have to manually declare types every time. This makes your code look cleaner and saves time.

Automatic type safety:
Even without writing types, TypeScript still knows what kind of data to expect. So if you try to do something like:

ts
Copy
Edit
name = 10;
TypeScript will throw an error, because it knows name is a string.

Better developer experience:
When using editors like VS Code, inferred types help with autocompletion and suggestions. That speeds up coding and reduces silly mistakes.

Smooth learning curve for JavaScript devs:
JavaScript developers can gradually start using TypeScript without getting overwhelmed by types, since inference takes care of many things automatically.

A Real-Life Analogy
Imagine you see someone drinking from a cup. You didn’t hear them say “This is tea,” but from the smell and color, you guess it’s tea — and you’re probably right. That’s how type inference works — TypeScript “guesses” the type from the context.
