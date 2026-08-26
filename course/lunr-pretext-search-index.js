var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-fields-activity",
  "level": "1",
  "url": "ws-fields-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 1: Fields",
  "body": " Module 1: Fields  The Good Place    Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of natural numbers is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of complex numbers is     The set of  matrices with real entries is          Binary Operations  Our English word algebra comes from the Arabic word al-jabr, meaning the reunion of broken parts . It is not surprising, then, that we will consider ways of combining two elements of a set into one. To do this, we turn to a particular type of function known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that , then is closed under .      Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write .  Since, whenever we have , we can say . Thus, is closed under the operation .  However, is not closed under the binary operation because, for example, .       Fields  A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all , .     Addition and multiplication are associative , meaning that for all , .     Addition and multiplication are commutative , that is, for all , .    The set  contains an additive identity . That is, there exists an element such that .    The set  contains a multiplicative identity . That is, there exists an element such that .     Every element of has an additive inverse in  , meaning that for every , .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .          For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?       Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you add like terms , in multiplication you need to use the distributive property).    Which of the properties of a field do polynomials have?      Other Operations   Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?       Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)   Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for rectangle multiplication .   Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!       Summarize   Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                                       Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                           Multiplication distributes over addition                               Review questions   What are the sets and ?   What is a binary operation? And what does it mean for a binary operation to be closed?  What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?  Why do you think we called fields The Good Place ?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 1   A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For elements , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?     Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.    Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity. (Actually, this works in any ring, but you don't know what a ring is yet!)  Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!   This may at first seem silly (even elementary schoolers sort of know this!), but actually, it's not that obvious. To see why this is not obvious - try thinking a little more abstractly - why should the additive identity of a field, multiplied by anything, give back the additive identity? The only thing that we know about the additive identity is that when you add it to anything, it doesn't change it. There's no reason it should have any reasonable interaction with multiplication.      "
},
{
  "id": "ws-fields-activity-3-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers whole numbers integers rational numbers real numbers irrational numbers complex numbers  matrices with real entries "
},
{
  "id": "ws-fields-activity-3-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary operation on  closed under "
},
{
  "id": "ws-fields-activity-3-2-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3-2-3",
  "type": "Example",
  "number": "1",
  "title": "Ordered pairs.",
  "body": " Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write .  Since, whenever we have , we can say . Thus, is closed under the operation .  However, is not closed under the binary operation because, for example, .  "
},
{
  "id": "ws-fields-activity-4-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-4-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "ws-fields-activity-5-1",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-5-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?   "
},
{
  "id": "ws-fields-activity-6-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Which of the properties of a field do polynomials have?   "
},
{
  "id": "ws-fields-activity-6-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-2-2",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?  "
},
{
  "id": "ws-rectangle-math-1-6",
  "level": "2",
  "url": "ws-fields-activity.html#ws-rectangle-math-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!  "
},
{
  "id": "sec-fields-review-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#sec-fields-review-1-2",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.   "
},
{
  "id": "ws-fields-activity-10-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "A field of ordered pairs?",
  "body": " A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For elements , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?   "
},
{
  "id": "ws-fields-activity-10-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "Playing with distribution.",
  "body": " Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.  "
},
{
  "id": "ws-fields-activity-10-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Messing with zero.",
  "body": " Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity. (Actually, this works in any ring, but you don't know what a ring is yet!)  Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!   This may at first seem silly (even elementary schoolers sort of know this!), but actually, it's not that obvious. To see why this is not obvious - try thinking a little more abstractly - why should the additive identity of a field, multiplied by anything, give back the additive identity? The only thing that we know about the additive identity is that when you add it to anything, it doesn't change it. There's no reason it should have any reasonable interaction with multiplication.   "
},
{
  "id": "portfolios",
  "level": "1",
  "url": "portfolios.html",
  "type": "Chapter",
  "number": "",
  "title": "Portfolio problems",
  "body": " Portfolio problems   Portfolio problems will be posted here. Check back!    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
