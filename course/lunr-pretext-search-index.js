var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-fields-activity",
  "level": "1",
  "url": "ws-fields-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 1: Fields",
  "body": " Module 1: Fields  The Good Place    Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of natural numbers is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of complex numbers is     The set of  matrices with real entries is            Binary Operations  Our English word algebra comes from the Arabic word al-jabr, which means the reunion of broken parts . It is not surprising, then, that we will be considering ways of combining two elements of a set into one; to do this, we turn to a particular type of function, known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that we say that is closed under the operation .      Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .     Fields  A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all and .     Addition and multiplication are associative , meaning that for all , , and .     Addition and multiplication are commutative , that is, for all , and .     The set contains an additive identity . That is, there exists an element such that .     The set contains a multiplicative identity . That is, there exists an element such that for all , .     Every element of has an additive inverse within  , meaning that for every , there exists a such that .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .          For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?       Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you add like terms , in multiplication you need to use the distributive property).    Which of the properties of a field do polynomials have?      Other Operations   Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?       Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)   Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for rectangle multiplication .   Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!       Summarize   Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                                 Review questions   What are the sets and ?   What is a binary operation? And what does it mean for a binary operation to be closed?  What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?  Why do you think DocK called fields The Good Place ?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 1   A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?     Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.    Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!       "
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
  "id": "ws-fields-activity-4-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-4-1-3",
  "type": "Example",
  "number": "1",
  "title": "Ordered pairs.",
  "body": " Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .  "
},
{
  "id": "ws-fields-activity-4-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-4-2-2",
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
  "body": " Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                            "
},
{
  "id": "ws-fields-activity-10-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "A field of ordered pairs?",
  "body": " A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?   "
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
  "body": " Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!    "
},
{
  "id": "ws-divisibility-activity",
  "level": "1",
  "url": "ws-divisibility-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 2: Divisibility of Integers, Division Algorithm, Integer Congruence",
  "body": " Module 2: Divisibility of Integers, Division Algorithm, Integer Congruence  The Leftovers    The Integers  We'll assume the following about the integers as axioms . We don't prove axioms, we use them as building blocks to prove them. They give us a floor to stand on. Otherwise it's turtles all the way down.   Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .       Which axioms of a field are the integers missing?      Divides    An integer  divides an integer , denoted , if there exists an integer such that .    In a popular high school mathematics textbook, students are told that one of the theorems in number theory is the following:   If and are integers where is a factor of and is a factor of , then is a factor of .     Prove . It may help to translate this to use the word divides .      Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.        The Division Algorithm   The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .      Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.      What is different about applying the division algorithm when ?      Do you think we should we assume the division algorithm as an axiom or try to prove it?      Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?        More Division Algorithm    If prove that . (Use the definition of the set .) If , is ?       We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .     At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?      Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)     You've reached a contradiction, how?     What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!        Congruence    Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .    Examples: Here's a chance to remember congruences:    Give an example of two integers that are congruent modulo , where one is positive and one is negative.      Characterize all the integers such that . What are all the integers such that ?      Prove that, for all and , if and then .      Prove that for all and , if and then .        Fun with Congruence (and a connection to fields)    Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?       Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!         My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?        Review questions  Make sure you can answer the following questions:   What is the definition of divides ? Does where ? Does where .  State the division algorithm and apply to any pair of integers satisfying the hypothesis.  State the definition of and be able to determine if any pair of integers and are congruent modulo .   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 2   Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?    Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by (where the remainder is given by the Division Algorithm).     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.    UPCs!  Find a product with a UPC and verify the check digit.    Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has exactly 2 solutions.     "
},
{
  "id": "ws-divisibility-activity-3-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-3-1-3",
  "type": "Axiom",
  "number": "3",
  "title": "Axioms of Integer Arithmetic.",
  "body": " Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .     "
},
{
  "id": "ws-divisibility-activity-4-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-2",
  "type": "Definition",
  "number": "4",
  "title": "",
  "body": "  An integer  divides an integer , denoted , if there exists an integer such that .   "
},
{
  "id": "divides-div-thm",
  "level": "2",
  "url": "ws-divisibility-activity.html#divides-div-thm",
  "type": "Theorem",
  "number": "5",
  "title": "",
  "body": " If and are integers where is a factor of and is a factor of , then is a factor of .  "
},
{
  "id": "ws-divisibility-activity-4-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-5",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Prove . It may help to translate this to use the word divides .   "
},
{
  "id": "ws-divisibility-activity-4-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-6",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.   "
},
{
  "id": "ws-divisibility-activity-5-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-2",
  "type": "Theorem",
  "number": "7",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .   "
},
{
  "id": "ws-divisibility-activity-5-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.   "
},
{
  "id": "ws-divisibility-activity-5-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  What is different about applying the division algorithm when ?   "
},
{
  "id": "ws-divisibility-activity-5-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Do you think we should we assume the division algorithm as an axiom or try to prove it?   "
},
{
  "id": "ws-divisibility-activity-5-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?   "
},
{
  "id": "ws-divisibility-activity-6-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-2",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  If prove that . (Use the definition of the set .) If , is ?    "
},
{
  "id": "ws-divisibility-activity-6-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-3",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .  "
},
{
  "id": "ws-divisibility-activity-6-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-4",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?   "
},
{
  "id": "ws-divisibility-activity-6-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-5",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)   "
},
{
  "id": "ws-divisibility-activity-6-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-6",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " You've reached a contradiction, how?  "
},
{
  "id": "ws-divisibility-activity-6-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-7",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!   "
},
{
  "id": "ws-divisibility-activity-7-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-2",
  "type": "Definition",
  "number": "9",
  "title": "",
  "body": "  Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .   "
},
{
  "id": "ws-divisibility-activity-7-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Give an example of two integers that are congruent modulo , where one is positive and one is negative.   "
},
{
  "id": "ws-divisibility-activity-7-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Characterize all the integers such that . What are all the integers such that ?   "
},
{
  "id": "ws-divisibility-activity-7-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-6",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Prove that, for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-7-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-7",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Prove that for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-8-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-2",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?   "
},
{
  "id": "ws-divisibility-activity-8-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-3",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "   Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!      "
},
{
  "id": "ws-divisibility-activity-8-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-4",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?   "
},
{
  "id": "ws-divisibility-activity-10-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Fun (?) with fields (?).",
  "body": " Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?  "
},
{
  "id": "ws-divisibility-activity-10-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "Another way to talk about congruences.",
  "body": " Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by (where the remainder is given by the Division Algorithm).     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.  "
},
{
  "id": "ws-divisibility-activity-10-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "UPCs!",
  "body": " UPCs!  Find a product with a UPC and verify the check digit.  "
},
{
  "id": "ws-divisibility-activity-10-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-5",
  "type": "Exercise",
  "number": "4",
  "title": "Another way congruences are weird.",
  "body": " Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has exactly 2 solutions.  "
},
{
  "id": "ws-equivalence-zn-activity",
  "level": "1",
  "url": "ws-equivalence-zn-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 3: Equivalence Relations, Equivalence Classes, and <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span>",
  "body": " Module 3: Equivalence Relations, Equivalence Classes, and  A Strange New World    Equivalence Relations   Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .        Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .         Reflexive  Symmetric  Transitive    1.          2.          3.          4.          5.               Equivalence Classes    Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,      Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in (a) on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in (e). on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are also called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in (b) on the previous page? What about ? How is this different than what happened in previous questions?        Some Properties of Equivalence Classes  The reason we define an equivalence relation to have the properties reflexive, symmetric, and transitive is that it leads to equivalence classes that have some special properties.    We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of for which congruence classes modulo are equal. Is where is congruence modulo ? Then give an example for which , and determine if .    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?     Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes corresponding to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?          The Number System  For our purposes, the most important equivalence relation will be congruence modulo . This allows us to define the number system :   For every integer , the integers modulo denoted , is the set of the distinct congruence classes of modulo , i.e.,    We can make into a number system by defining addition and multiplication on the set:   Addition:     Multiplication:    This may seem like a silly thing to do, but remember that is actually an infinite set! In fact, the two 's actually, in a sense, have a different meaning. The one on the left is saying add these infinite sets and the one on the right is saying add these two integers .  Let's consider . We'll find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out that it's OK: Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .    Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                                   Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Which is this table for?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a field do these have?     Review questions   What is an equivalence relation? What does it mean to be reflexive, symmetric, and transitive?  What is an equivalence class? What is a congruence class?  How do we add and multiply congruence classes?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 3   Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .    When is a field?  Based on your work for this module, make a conjecture for when is a field. State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.    Multiplicative cancellation  One of the things our high school teachers told us about is multiplicative cancellation (although they probably didn't use those words). As an example, if we have we could cancel the 's so that we have . But in high school we were almost always working in . This question asks about multiplicative cancellation in .  The statement at the start isn't quite precise enough. There's one value for which multiplicative cancellation doesn't work. What is it, and why doesn't it work?  Consider . For with , if does ? (Hint: Look at your multiplication table for !)  Consider . For with , if does ?  You should have gotten two different answers for (a) and (b). What's different about 11 vs. 12?  What if I told you is a field? What axioms might you use to prove part (c) is true?     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-2",
  "type": "Definition",
  "number": "11",
  "title": "",
  "body": " Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .   "
},
{
  "id": "ws-equivalence-zn-activity-4-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-2",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,    "
},
{
  "id": "ws-equivalence-zn-activity-4-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in (a) on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in (e). on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are also called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in (b) on the previous page? What about ? How is this different than what happened in previous questions?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of for which congruence classes modulo are equal. Is where is congruence modulo ? Then give an example for which , and determine if .    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes corresponding to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?     "
},
{
  "id": "ws-equivalence-zn-activity-6-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-3",
  "type": "Definition",
  "number": "15",
  "title": "",
  "body": " For every integer , the integers modulo denoted , is the set of the distinct congruence classes of modulo , i.e.,   "
},
{
  "id": "ws-equivalence-zn-activity-6-1-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-5",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": "Let's consider . We'll find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out that it's OK: Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .  "
},
{
  "id": "ws-equivalence-zn-activity-6-1-6",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                              "
},
{
  "id": "ws-equivalence-zn-activity-7-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-7-1",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).  "
},
{
  "id": "ws-equivalence-zn-activity-8-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-1",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "Which is this table for? "
},
{
  "id": "ws-equivalence-zn-activity-8-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-5",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a field do these have? "
},
{
  "id": "ws-equivalence-zn-activity-10-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Fractions and relations.",
  "body": " Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "When is <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span> a field?",
  "body": " When is a field?  Based on your work for this module, make a conjecture for when is a field. State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Multiplicative cancellation.",
  "body": " Multiplicative cancellation  One of the things our high school teachers told us about is multiplicative cancellation (although they probably didn't use those words). As an example, if we have we could cancel the 's so that we have . But in high school we were almost always working in . This question asks about multiplicative cancellation in .  The statement at the start isn't quite precise enough. There's one value for which multiplicative cancellation doesn't work. What is it, and why doesn't it work?  Consider . For with , if does ? (Hint: Look at your multiplication table for !)  Consider . For with , if does ?  You should have gotten two different answers for (a) and (b). What's different about 11 vs. 12?  What if I told you is a field? What axioms might you use to prove part (c) is true?  "
},
{
  "id": "ws-gcd-activity",
  "level": "1",
  "url": "ws-gcd-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 4: Greatest Common Divisors, the Euclidean Algorithm, and Linear Combinations",
  "body": " Module 4: Greatest Common Divisors, the Euclidean Algorithm, and Linear Combinations  Numbers    Greatest Common Divisors  Here's the formal definition of greatest common divisor:    Let and be integers, not both zero. A common divisor of and is any integer such that and . We say that an integer is the greatest common divisor of and , denoted , provided that is a common divisor of and , and if is a common divisor of and then .      Applying The Euclidean Algorithm  Find using the Euclidean algorithm. If you'd like another example see page 26 of your text.      Why The Euclidean Algorithm Works  Here's a theorem that explains why the Euclidean algorithm works:    Let and be integers, not both and suppose that for some integers and . Then .          Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .    Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .    How do the previous 2 parts show that ?    How is this theorem related to the Euclidean algorithm?       Linear Combinations and Back Substitution    Let and be integers. A linear combination of and is an integer that can be written as for some integers and .    Recall that we found using the Euclidean algorithm as follows:   Using these equations, we will find integers and such that .   Note from equation we have Solve for in equation and substitute into this equation. Do not simplify.    Rewrite the equation you found in (a) so that you have 45 as a linear combination of and .    Now, using equation , substitute for in the equation you have for part (b). Rewrite so that you have as a linear combination of and .       Using the Euclidean algorithm you can always find . Then using this back-substitution method with the Euclidean algorithm you can always write the greatest common divisor of and as a linear combination of and . Together some call this the Extended Euclidean Algorithm . Using the Euclidean Algorithm find and find and such that .     If time: Are these linear combinations unique? E.g., can you find more than one linear combination of and that equals ?     If time: Use your work finding to write as a linear combination of and .      Bezout's Identity  Here are two important theorems in number theory:   Bezout's Identity   Let and be integers, not both zero. Then can be written as a linear combination of and . That is, there exist integers and such that     This is at first surprising! There is no reason there should be integers and such that . But based on the work on the previous page, you can always back-substitute from the Euclidean algorithm.    Let and be integers, not both zero. Then is equal to the smallest positive linear combination of and .    The fact that it is the smallest positive linear combination is a Weekly Practice Problem - divides every linear combination of and .  We will skip proofs of these theorems and opt to see applications of these theorems instead.   Suppose and . Then, letting and we find . Does it follow from Bezout's Identity that ?    Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Hint: Show divides any linear combination of and .    Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Note: For two integers and , not both , we say and are relatively prime provided that .       Fun With Linear Combinations    Let's see a connection between Multiplicative Inverses and GCD's:    In , find . That is, find the multiplicative inverse of in .    Find a linear combination of and that is equal to . (If you don't see it right away, use the Euclidean Algorithm and back substitution, it's good practice!) How is your answer related to the multiplicative inverse of in ?    Does have a multiplicative inverse in ? How does this relate to greatest common divisors and linear combinations?      In Die Hard 2, there's a scene where a bomb will go off unless they get exactly 4 gallons of water in a jug. In the movie, they are given a 5 gallon jug and a 3 gallon jug and a fountain with unlimited water.    How can you get 4 gallons of water in a jug in this situation?    Note that . Write for some integers and . How does this give you instructions for how to get 1 gallon of water in one of the jugs? (If time: Is there a unique solution?)    In Die Hard 25, they are given a gallon jug and a gallon jug, and asked to get gallons of water in a jug. Is this possible? Why or why not?        Review questions Make sure you can answer the following questions:   What is the formal definition of the greatest common divisor of two integers, that is ?    What is the Euclidean algorithm, how do we apply it, and why does it work?    How can we use the Euclidean algorithm and \"back-substitution\" to write as a linear combination of and ?    What does Bezout's identity say? What are some erroneous applications of Bezout's identity?    The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 4   (This is good practice for Learning Target 6.) For each of the following values of and , use the Euclidean algorithm to determine . Then find integers and such that .    ,      ,      , . (Note we did in class!)     (This is good practice for Learning Target 7.) Decide whether each of the following statements is true or false. For those that are true, explain why. For those that are false, give a counterexample and then change one word or symbol in the statement to make it true. For each statement, assume that and are positive integers.  If for some integers and , then .  If for some integers and , then .  If for some integers and , then .    Prove that divides every linear combination of and . That is, prove that for all , . Explain why this proves the Corollary to Bezout's Identity given in this packet.     "
},
{
  "id": "ws-gcd-activity-3-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-3-1-3",
  "type": "Definition",
  "number": "17",
  "title": "",
  "body": "  Let and be integers, not both zero. A common divisor of and is any integer such that and . We say that an integer is the greatest common divisor of and , denoted , provided that is a common divisor of and , and if is a common divisor of and then .   "
},
{
  "id": "ws-gcd-activity-4-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-3",
  "type": "Theorem",
  "number": "18",
  "title": "",
  "body": "  Let and be integers, not both and suppose that for some integers and . Then .   "
},
{
  "id": "ws-gcd-activity-4-1-4",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-4",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .  "
},
{
  "id": "ws-gcd-activity-4-1-5",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-5",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .  "
},
{
  "id": "ws-gcd-activity-4-1-6",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-6",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " How do the previous 2 parts show that ?  "
},
{
  "id": "ws-gcd-activity-4-1-7",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-7",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " How is this theorem related to the Euclidean algorithm?  "
},
{
  "id": "ws-gcd-activity-5-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-2",
  "type": "Definition",
  "number": "19",
  "title": "",
  "body": "  Let and be integers. A linear combination of and is an integer that can be written as for some integers and .   "
},
{
  "id": "ws-gcd-activity-5-1-6",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Note from equation we have Solve for in equation and substitute into this equation. Do not simplify.  "
},
{
  "id": "ws-gcd-activity-5-1-7",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Rewrite the equation you found in (a) so that you have 45 as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-5-1-8",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Now, using equation , substitute for in the equation you have for part (b). Rewrite so that you have as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-6-1",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-1",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Using the Euclidean algorithm you can always find . Then using this back-substitution method with the Euclidean algorithm you can always write the greatest common divisor of and as a linear combination of and . Together some call this the Extended Euclidean Algorithm . Using the Euclidean Algorithm find and find and such that .  "
},
{
  "id": "ws-gcd-activity-6-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-2",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  If time: Are these linear combinations unique? E.g., can you find more than one linear combination of and that equals ?  "
},
{
  "id": "ws-gcd-activity-6-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-3",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  If time: Use your work finding to write as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-7-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-3",
  "type": "Theorem",
  "number": "20",
  "title": "Bezout’s Identity.",
  "body": " Bezout's Identity   Let and be integers, not both zero. Then can be written as a linear combination of and . That is, there exist integers and such that    "
},
{
  "id": "ws-gcd-activity-7-1-5",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-5",
  "type": "Corollary",
  "number": "21",
  "title": "",
  "body": "  Let and be integers, not both zero. Then is equal to the smallest positive linear combination of and .   "
},
{
  "id": "ws-gcd-activity-7-1-8",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-8",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Suppose and . Then, letting and we find . Does it follow from Bezout's Identity that ?  "
},
{
  "id": "ws-gcd-activity-7-1-9",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-9",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Hint: Show divides any linear combination of and .  "
},
{
  "id": "ws-gcd-activity-7-1-10",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-10",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Note: For two integers and , not both , we say and are relatively prime provided that .  "
},
{
  "id": "ws-gcd-activity-8-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-8-1-2",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Let's see a connection between Multiplicative Inverses and GCD's:    In , find . That is, find the multiplicative inverse of in .    Find a linear combination of and that is equal to . (If you don't see it right away, use the Euclidean Algorithm and back substitution, it's good practice!) How is your answer related to the multiplicative inverse of in ?    Does have a multiplicative inverse in ? How does this relate to greatest common divisors and linear combinations?   "
},
{
  "id": "ws-gcd-activity-8-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-8-1-3",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  In Die Hard 2, there's a scene where a bomb will go off unless they get exactly 4 gallons of water in a jug. In the movie, they are given a 5 gallon jug and a 3 gallon jug and a fountain with unlimited water.    How can you get 4 gallons of water in a jug in this situation?    Note that . Write for some integers and . How does this give you instructions for how to get 1 gallon of water in one of the jugs? (If time: Is there a unique solution?)    In Die Hard 25, they are given a gallon jug and a gallon jug, and asked to get gallons of water in a jug. Is this possible? Why or why not?   "
},
{
  "id": "ws-gcd-activity-10-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " (This is good practice for Learning Target 6.) For each of the following values of and , use the Euclidean algorithm to determine . Then find integers and such that .    ,      ,      , . (Note we did in class!)   "
},
{
  "id": "ws-gcd-activity-10-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " (This is good practice for Learning Target 7.) Decide whether each of the following statements is true or false. For those that are true, explain why. For those that are false, give a counterexample and then change one word or symbol in the statement to make it true. For each statement, assume that and are positive integers.  If for some integers and , then .  If for some integers and , then .  If for some integers and , then .  "
},
{
  "id": "ws-gcd-activity-10-1-4",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Prove that divides every linear combination of and . That is, prove that for all , . Explain why this proves the Corollary to Bezout's Identity given in this packet.  "
},
{
  "id": "ws-rings-activity",
  "level": "1",
  "url": "ws-rings-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 5: Rings, Units, Zero Divisors, and Integral Domains",
  "body": " Module 5: Rings, Units, Zero Divisors, and Integral Domains  Almost Perfect    Definitions   A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .         Examples and non-examples  For each of the definitions below, list an example and a non-example. I.e., list something that is a commutative ring and something that is not a commutative ring. Some examples of number systems you might use: , , , , , , (the even numbers).    Commutative ring: Let be a ring. Then is said to be commutative if multiplication in is commutative, that is, if for all .   Example:  Nonexample:      Ring with identity: Let be a ring. An identity for is an element such that and for all . If such an element exists, then is said to be a ring with identity .   Example:  Nonexample:      Zero divisors: Let be a ring. An element is said to be a zero divisor if and or for some nonzero .   Example (ring and element):  Nonexample:      Multiplicative inverse: Let be a ring with identity and let . An element is said to be a multiplicative inverse of provided that .   Example (ring and element):  Nonexample:      Units: Let be a ring with identity. An element is said to be a unit provided that contains a multiplicative inverse for . In other words, is a unit if and only if there exists such that .   Example (ring and element):  Nonexample:      Integral Domain: An integral domain is a commutative ring with identity that contains no zero divisors.   Example:  Nonexample:      Field: A field is a commutative ring with identity in which every nonzero element has a multiplicative inverse.   Example:  Nonexample:        Units and Zero Divisors in  In this activity we'll work to determine (and prove) exactly when an element of is a unit or a zero divisor.   Look back at multiplication tables you have for various . For at least four of them, list the units and the zero divisors.    units  zero divisors      Determining whether an element of is a unit or a zero divisor has something to do with last week's module. What do you notice about the units and zero divisors in your lists? (Hint: Consider their relationship to .) Then fill in the conjectures:    Let with , and let . Then is a unit in if and only if...    Let with , and let . Then is a zero divisor in if and only if...     In last week's module you found and . Reduce both sides modulo to find the multiplicative inverse of in .     Proofs! Next we'll prove the conjectures you made above. First, we'll prove the forward direction of the unit part.  Suppose with and . Suppose is a unit in .    Write down what it means for to be a unit in .    Recall from Module 3 that two equivalence classes are equal, , if and only if . Translate your statement above using this fact.    Find a linear combination of and that is equal to . What does this say about ? (Hint: Bezout's identity.)        (Backward direction of the unit part.) Suppose with and . Suppose . Apply Bezout's identity and reduce modulo . How does this show is a unit in ?     (Forward direction of the zero divisor part.) Suppose with , and . Suppose is a zero divisor in .    Write down a careful definition of what it means for to be a zero divisor.    Suppose . Apply Bezout's identity, and multiply the result by . Conclude . Why is this a contradiction?     (Finally: Backward direction of the zero divisor part.) Suppose with and with . Suppose . Let . Show that is an integer, and .      Be careful - not everything has to be a unit or a zero divisor (or ). What are the units in ? What are the zero divisors in ? Are there elements that are neither units nor zero divisors?    Polynomials   Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted .    Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring with identity?    Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?       Review questions  Make sure you can answer the following questions:   What's a ring? A commutative ring? A ring with identity? A multiplicative inverse? A zero divisor? A unit? An integral domain? A field? Make sure you can give examples and nonexamples of each and varying combinations.  How can you tell if $[a]$ in $\\mathbb{Z}_n$ is a zero divisor or a unit? How can you use an algorithm to find the multiplicative inverse of $[a]$ in $\\mathbb{Z}_n$? Is everything in a ring a zero divisor, a unit, or zero?  What's a polynomial ring? Are polynomial rings always commutative? Do they always have identity? Are they always integral domains?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 5   Let with , . Determine whether each of the following statements are true or false. Justify your answers. Not all of these are true!    If is a zero divisor, then is not a unit.    If is not a unit, then is a zero divisor.    If is a unit then is not a zero divisor.    If is not a zero divisor, then is a unit.     Back to units and zero divisors in .  Consider . Since 16 and 24 are not relatively prime, it should follow that is a zero divisor in . Let's show is a zero divisor. Find . Show is a nonzero integer, and .  Generalize what you did in part (a) to , thus showing that if then is a zero divisor in .  Now, assume is a unit. Let's show . Since is a unit, there exists such that . This can be rewritten as . This means and are equal as congruence classes.  First, recall this Lemma from Module 3:    Apply the Lemma (here is congruence modulo ), and then work with what you get to show that there's a linear combination of and equal to . Then conclude that .    Let be a ring. Suppose that due to a printer error, the addition and multiplication tables for were printed with several missing entries, as shown below:     +                                                                                                      Using only the ring axioms, complete the tables. Explain how each entry you add can be determined from the ring axioms and the entries already completed. (Hints: Some important ring axioms are addition being commutative, and the distributive property. Recall Weekly Practice from Module 1 #3. Also, you can use Proof Portfolio Problem 6a, which is true in rings (not just fields). Note 5b is not true for all rings.)      For which is an integral domain? A field?     "
},
{
  "id": "ws-rings-activity-3-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-3-1-2",
  "type": "Definition",
  "number": "22",
  "title": "",
  "body": " A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .   "
},
{
  "id": "ws-rings-activity-4-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Commutative ring: Let be a ring. Then is said to be commutative if multiplication in is commutative, that is, if for all .   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Ring with identity: Let be a ring. An identity for is an element such that and for all . If such an element exists, then is said to be a ring with identity .   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Zero divisors: Let be a ring. An element is said to be a zero divisor if and or for some nonzero .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-6",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Multiplicative inverse: Let be a ring with identity and let . An element is said to be a multiplicative inverse of provided that .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-7",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Units: Let be a ring with identity. An element is said to be a unit provided that contains a multiplicative inverse for . In other words, is a unit if and only if there exists such that .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-8",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Integral Domain: An integral domain is a commutative ring with identity that contains no zero divisors.   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-9",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Field: A field is a commutative ring with identity in which every nonzero element has a multiplicative inverse.   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-5-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-3",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Look back at multiplication tables you have for various . For at least four of them, list the units and the zero divisors.    units  zero divisors   "
},
{
  "id": "ws-rings-activity-5-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-4",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Determining whether an element of is a unit or a zero divisor has something to do with last week's module. What do you notice about the units and zero divisors in your lists? (Hint: Consider their relationship to .) Then fill in the conjectures:    Let with , and let . Then is a unit in if and only if...    Let with , and let . Then is a zero divisor in if and only if...   "
},
{
  "id": "ws-rings-activity-5-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-5",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " In last week's module you found and . Reduce both sides modulo to find the multiplicative inverse of in .  "
},
{
  "id": "ws-rings-activity-5-1-6",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-6",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Proofs! Next we'll prove the conjectures you made above. First, we'll prove the forward direction of the unit part.  Suppose with and . Suppose is a unit in .    Write down what it means for to be a unit in .    Recall from Module 3 that two equivalence classes are equal, , if and only if . Translate your statement above using this fact.    Find a linear combination of and that is equal to . What does this say about ? (Hint: Bezout's identity.)   "
},
{
  "id": "ws-rings-activity-6-1",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-1",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " (Backward direction of the unit part.) Suppose with and . Suppose . Apply Bezout's identity and reduce modulo . How does this show is a unit in ?  "
},
{
  "id": "ws-rings-activity-6-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-2",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  (Forward direction of the zero divisor part.) Suppose with , and . Suppose is a zero divisor in .    Write down a careful definition of what it means for to be a zero divisor.    Suppose . Apply Bezout's identity, and multiply the result by . Conclude . Why is this a contradiction?   "
},
{
  "id": "ws-rings-activity-6-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-3",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " (Finally: Backward direction of the zero divisor part.) Suppose with and with . Suppose . Let . Show that is an integer, and .  "
},
{
  "id": "ws-rings-activity-7-1",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-1",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Be careful - not everything has to be a unit or a zero divisor (or ). What are the units in ? What are the zero divisors in ? Are there elements that are neither units nor zero divisors?  "
},
{
  "id": "ws-rings-activity-7-2-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-2",
  "type": "Definition",
  "number": "23",
  "title": "",
  "body": " Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted .  "
},
{
  "id": "ws-rings-activity-7-2-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-3",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring with identity?  "
},
{
  "id": "ws-rings-activity-7-2-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-4",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?  "
},
{
  "id": "ws-rings-activity-9-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Let with , . Determine whether each of the following statements are true or false. Justify your answers. Not all of these are true!    If is a zero divisor, then is not a unit.    If is not a unit, then is a zero divisor.    If is a unit then is not a zero divisor.    If is not a zero divisor, then is a unit.   "
},
{
  "id": "ws-rings-activity-9-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Back to units and zero divisors in .  Consider . Since 16 and 24 are not relatively prime, it should follow that is a zero divisor in . Let's show is a zero divisor. Find . Show is a nonzero integer, and .  Generalize what you did in part (a) to , thus showing that if then is a zero divisor in .  Now, assume is a unit. Let's show . Since is a unit, there exists such that . This can be rewritten as . This means and are equal as congruence classes.  First, recall this Lemma from Module 3:    Apply the Lemma (here is congruence modulo ), and then work with what you get to show that there's a linear combination of and equal to . Then conclude that .  "
},
{
  "id": "ws-rings-activity-9-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a ring. Suppose that due to a printer error, the addition and multiplication tables for were printed with several missing entries, as shown below:     +                                                                                                      Using only the ring axioms, complete the tables. Explain how each entry you add can be determined from the ring axioms and the entries already completed. (Hints: Some important ring axioms are addition being commutative, and the distributive property. Recall Weekly Practice from Module 1 #3. Also, you can use Proof Portfolio Problem 6a, which is true in rings (not just fields). Note 5b is not true for all rings.)    "
},
{
  "id": "ws-rings-activity-9-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " For which is an integral domain? A field?  "
},
{
  "id": "ws-proofs-activity",
  "level": "1",
  "url": "ws-proofs-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 6: What Properties Hold When?",
  "body": " Module 6: What Properties Hold When?  Proofs    Rings  Here's a reminder of the ring axioms which we will use in this module!   A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .       Here's a list of theorems. If we can prove these using ring axioms, we know they are true about all rings including - square matrices , integers , even integers , the rational numbers , polynomials for a commutative ring , the real numbers , the complex numbers , and anything else we can show is a ring.    (Additive Cancellation) Let be a ring. For all , if then .      (Multiplication by ) Let be a ring and let be the additive identity of . Then for all .      (Uniqueness) Let be a ring.   (Additive identities) Suppose that both and are zero elements for . Then .    (Additive inverses) Let . Suppose that both and are additive inverses for . Then .    (Multiplicative identities) Suppose that both and are both identities for . Then     (Multiplicative inverses) Let . Suppose that both and are multiplicative inverses for . Then .         (Fields are integral domains.) Let be a ring with identity and let be a unit. Then is not a zero divisor.      (Finite integral domains are fields.) Let be a finite integral domain. Let with . Then is a unit.    In the following theorem note that the symbol means the additive inverse of . We define subtraction in terms of addition, e.g., .    (The negatives.) Let be a ring, and let . Then                  (Generalized Distributive Law) Let be a ring, let , and let . Then                   Let's prove some theorems!   In Weekly Practice 1 you proved in any field and any , . You actually only needed the ring axioms. Let's recall that proof.      (Multiplication by ) Let be a ring and let be the additive identity of . Then for all .  Prove it! Hint: Consider in two different ways.      In Problem 5 of the proof portfolio, you'll prove additive and multiplicative cancellation holds in fields. For additive cancellation, you only need the ring axioms. Let's prove multiplicative cancellation holds in more than just fields.    (Multiplicative Cancellation) Let be a ring and let be a nonzero element of that is not a zero divisor. For , if , then . Similarly if then .    Prove it! Hint: Starting with , add to both sides.      We established in the preview activity for this module that every field is an integral domain. It turns out every finite integral domain is a field.    (Finite integral domains are fields.) Let be a finite integral domain. Let with . Then is a unit.    Prove it! Okay, this one has a trick, so let's walk through some parts.   Since is an integral domain, has identity. Consider the set : Let with . Multiply each element of by to get Explain why all elements of are unique. (Go by contradiction - suppose for some , . Then what?    Why does this imply that has an inverse?    Give an example of an infinite integral domain that is not a field.    For which is an integral domain? For which is a field?   You may read as negative . When talking about rings, the symbol means the additive inverse of . But the theorem labeled the negatives tells us that works like the negative we are familiar with.    Let be a ring and let . Then .     Prove it! You want to show the additive inverse of is . So we want to show . What ring axioms can you use to show this is true?      Review questions Make sure you can answer the following questions:   When does additive cancellation hold? When does multiplicative cancellation hold?    How do we usually prove uniqueness?    What is the relationship between fields and integral domains?    What do we say instead of negative when reading ? How do we prove things about negatives ?    How do we prove for any ring and ?    The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 6   Matrix problems  Prove (two by two matrices with entries from the real numbers) has a zero divisor. What reason besides having zero divisors is not an integral domain?    A negative result   We showed (or assume we showed) that for a ring and , we have . Consider the following proof that .   Proof: From we obtain , since in any ring the inverse of the inverse of an element is the original element.  Fill in the details. Then use the result to prove that if in is a unit, then is also a unit.     Yay, induction!  Prove the generalized distributive law by induction. Let be a ring, let , and let . Then .     "
},
{
  "id": "ws-proofs-activity-3-1-3",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-3-1-3",
  "type": "Definition",
  "number": "24",
  "title": "",
  "body": " A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .   "
},
{
  "id": "ws-proofs-activity-4-2",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-2",
  "type": "Theorem",
  "number": "25",
  "title": "",
  "body": "  (Additive Cancellation) Let be a ring. For all , if then .   "
},
{
  "id": "proofs-thm-mult-0",
  "level": "2",
  "url": "ws-proofs-activity.html#proofs-thm-mult-0",
  "type": "Theorem",
  "number": "26",
  "title": "",
  "body": "  (Multiplication by ) Let be a ring and let be the additive identity of . Then for all .   "
},
{
  "id": "ws-proofs-activity-4-4",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-4",
  "type": "Theorem",
  "number": "27",
  "title": "",
  "body": "  (Uniqueness) Let be a ring.   (Additive identities) Suppose that both and are zero elements for . Then .    (Additive inverses) Let . Suppose that both and are additive inverses for . Then .    (Multiplicative identities) Suppose that both and are both identities for . Then     (Multiplicative inverses) Let . Suppose that both and are multiplicative inverses for . Then .      "
},
{
  "id": "ws-proofs-activity-4-5",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-5",
  "type": "Theorem",
  "number": "28",
  "title": "",
  "body": "  (Fields are integral domains.) Let be a ring with identity and let be a unit. Then is not a zero divisor.   "
},
{
  "id": "ws-proofs-activity-4-6",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-6",
  "type": "Theorem",
  "number": "29",
  "title": "",
  "body": "  (Finite integral domains are fields.) Let be a finite integral domain. Let with . Then is a unit.   "
},
{
  "id": "ws-proofs-activity-4-8",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-8",
  "type": "Theorem",
  "number": "30",
  "title": "",
  "body": "  (The negatives.) Let be a ring, and let . Then               "
},
{
  "id": "ws-proofs-activity-4-9",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-4-9",
  "type": "Theorem",
  "number": "31",
  "title": "",
  "body": "  (Generalized Distributive Law) Let be a ring, let , and let . Then               "
},
{
  "id": "ws-proofs-activity-5-1-2",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-5-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " In Weekly Practice 1 you proved in any field and any , . You actually only needed the ring axioms. Let's recall that proof.      (Multiplication by ) Let be a ring and let be the additive identity of . Then for all .  Prove it! Hint: Consider in two different ways.    "
},
{
  "id": "ws-proofs-activity-5-1-3",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-5-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " In Problem 5 of the proof portfolio, you'll prove additive and multiplicative cancellation holds in fields. For additive cancellation, you only need the ring axioms. Let's prove multiplicative cancellation holds in more than just fields.    (Multiplicative Cancellation) Let be a ring and let be a nonzero element of that is not a zero divisor. For , if , then . Similarly if then .    Prove it! Hint: Starting with , add to both sides.  "
},
{
  "id": "ws-proofs-activity-6-2",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-2",
  "type": "Theorem",
  "number": "34",
  "title": "",
  "body": "  (Finite integral domains are fields.) Let be a finite integral domain. Let with . Then is a unit.   "
},
{
  "id": "ws-proofs-activity-6-4",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Since is an integral domain, has identity. Consider the set : Let with . Multiply each element of by to get Explain why all elements of are unique. (Go by contradiction - suppose for some , . Then what?  "
},
{
  "id": "ws-proofs-activity-6-5",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Why does this imply that has an inverse?  "
},
{
  "id": "ws-proofs-activity-6-6",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Give an example of an infinite integral domain that is not a field.  "
},
{
  "id": "ws-proofs-activity-6-7",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " For which is an integral domain? For which is a field?  "
},
{
  "id": "ws-proofs-activity-6-9",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-9",
  "type": "Theorem",
  "number": "35",
  "title": "",
  "body": "  Let be a ring and let . Then .   "
},
{
  "id": "ws-proofs-activity-6-10",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-6-10",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Prove it! You want to show the additive inverse of is . So we want to show . What ring axioms can you use to show this is true?  "
},
{
  "id": "ws-proofs-activity-8-1-2",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-8-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Matrix problems.",
  "body": " Matrix problems  Prove (two by two matrices with entries from the real numbers) has a zero divisor. What reason besides having zero divisors is not an integral domain?  "
},
{
  "id": "ws-proofs-activity-8-1-3",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-8-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "A negative result.",
  "body": " A negative result   We showed (or assume we showed) that for a ring and , we have . Consider the following proof that .   Proof: From we obtain , since in any ring the inverse of the inverse of an element is the original element.  Fill in the details. Then use the result to prove that if in is a unit, then is also a unit.   "
},
{
  "id": "ws-proofs-activity-8-1-4",
  "level": "2",
  "url": "ws-proofs-activity.html#ws-proofs-activity-8-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Yay, induction!",
  "body": " Yay, induction!  Prove the generalized distributive law by induction. Let be a ring, let , and let . Then .  "
},
{
  "id": "ws-algebra-in-other-activity",
  "level": "1",
  "url": "ws-algebra-in-other-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 7: Algebra in Other Number Systems",
  "body": " Module 7: Algebra in Other Number Systems  Into the Wild    Power Sets   Let be a set. The power set of denoted is the collection of all subsets of . That is .    For any sets and , the symmetric difference of and , denoted is the set of all elements that belong to either or , but not both. That is,     For any natural number , the number system is . That is, the elements are the sets that are subsets of , and for we define and .     Working with   Write the addition and multiplication tables for .    Is there an additive identity in ? What about a multiplicative identity in ? Do these generalize to ?       Does every element of have an additive inverse? What elements of do you think have an additive inverse?    Is every nonzero element of a unit? What elements of do you think are units?    Does have zero divisors? Do you think has zero divisors?    Do you think is a ring? A commutative ring? A ring with identity? An integral domain? A field?      Polynomials    Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted . (Note this language implies the polynomials form a ring. We'll take this as true, and just verify a couple of properties. The proof is mostly tedious and not insightful.       Adding Polynomials : The sum of polynomials  and is defined to be        Multiplying Polynomials : The product of polynomials  (of degree ) and (of degree ) is defined to be where for each with ,      Add and multiply and using the definitions above. Does this agree with what you think the sum and product should be?     If time: Let . Find and . What property of rings does this illustrate?       Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring? A ring with identity?    Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?    At some point you (maybe) learned that the if has degree and has degree then the degree of is . There, you were thinking about . Do the degrees work out this way in for any commutative ring ? If not always, when will it work? To explain, determine what the leading coefficient of is for arbitrary polynomials and .    If has an identity, the multiplicative identity of is . What elements of will have multiplicative inverses?      Review questions Make sure you can answer the following questions:  What axioms hold in a ring?  What is and is it a ring, an integral domain, a field?  What is for a commutative ring and is it a ring, an integral domain, a field?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 7   Positive reals  Let denote the set of all positive real numbers. (Note is not positive!) For all define   With these properties, does have an additive identity? If so, what is it?  With these properties, does have a multiplicative identity? If so, what is it?  Is a ring with these operations? Explain each axiom.  Does have zero divisors using these operations?  Is an integral domain using these operations?    Complex numbers  A complex number is any number of the form where and is an imaginary number with the property that . For a complex number , the real number is called the real part of and is called the imaginary part of . So Furthermore, addition and multiplication within are defined by and The complex numbers turn out to be a field. Let's show every nonzero element has a multiplicative inverse. That is, we want to show, for where and are not both , there exists such that   So we want and .   Solve the system of equations   for and , getting expressions that only depend on and . (You can do so using substitution. One way is to solve for in the second equation, plug your answer into the first equation, and then solve for . Then use what you know for to find .)   Verify that your answer in (a) gives the multiplicative inverse for . That is, .       Examples or not?  Give an example of each of the following or explain why no such example exists.  Two polynomials of degree in whose product is a polynomial of degree .  Two polynomials of degree in whose sum is a polynomial of degree .  Two polynomials of degree in whose product is a polynomial of degree .    "
},
{
  "id": "ws-algebra-in-other-activity-3-1-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-3-1-2",
  "type": "Definition",
  "number": "36",
  "title": "",
  "body": " Let be a set. The power set of denoted is the collection of all subsets of . That is .  "
},
{
  "id": "ws-algebra-in-other-activity-3-1-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-3-1-3",
  "type": "Definition",
  "number": "37",
  "title": "",
  "body": " For any sets and , the symmetric difference of and , denoted is the set of all elements that belong to either or , but not both. That is,   "
},
{
  "id": "ws-algebra-in-other-activity-3-1-4",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-3-1-4",
  "type": "Definition",
  "number": "38",
  "title": "",
  "body": " For any natural number , the number system is . That is, the elements are the sets that are subsets of , and for we define and .  "
},
{
  "id": "ws-algebra-in-other-activity-3-2-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-3-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Write the addition and multiplication tables for .  "
},
{
  "id": "ws-algebra-in-other-activity-3-2-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-3-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Is there an additive identity in ? What about a multiplicative identity in ? Do these generalize to ?  "
},
{
  "id": "ws-algebra-in-other-activity-4-1",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-4-1",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Does every element of have an additive inverse? What elements of do you think have an additive inverse?  "
},
{
  "id": "ws-algebra-in-other-activity-4-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-4-2",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Is every nonzero element of a unit? What elements of do you think are units?  "
},
{
  "id": "ws-algebra-in-other-activity-4-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-4-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Does have zero divisors? Do you think has zero divisors?  "
},
{
  "id": "ws-algebra-in-other-activity-4-4",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-4-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Do you think is a ring? A commutative ring? A ring with identity? An integral domain? A field?  "
},
{
  "id": "ws-algebra-in-other-activity-5-1-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-5-1-2",
  "type": "Definition",
  "number": "39",
  "title": "",
  "body": "  Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted . (Note this language implies the polynomials form a ring. We'll take this as true, and just verify a couple of properties. The proof is mostly tedious and not insightful.   "
},
{
  "id": "ws-algebra-in-other-activity-5-1-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-5-1-3",
  "type": "Definition",
  "number": "40",
  "title": "",
  "body": "   Adding Polynomials : The sum of polynomials  and is defined to be    "
},
{
  "id": "ws-algebra-in-other-activity-5-1-4",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-5-1-4",
  "type": "Definition",
  "number": "41",
  "title": "",
  "body": "   Multiplying Polynomials : The product of polynomials  (of degree ) and (of degree ) is defined to be where for each with ,    "
},
{
  "id": "ws-algebra-in-other-activity-5-1-5",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-5-1-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Add and multiply and using the definitions above. Does this agree with what you think the sum and product should be?  "
},
{
  "id": "ws-algebra-in-other-activity-5-1-6",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-5-1-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  If time: Let . Find and . What property of rings does this illustrate?  "
},
{
  "id": "ws-algebra-in-other-activity-6-1",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-6-1",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring? A ring with identity?  "
},
{
  "id": "ws-algebra-in-other-activity-6-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-6-2",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?  "
},
{
  "id": "ws-algebra-in-other-activity-6-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-6-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " At some point you (maybe) learned that the if has degree and has degree then the degree of is . There, you were thinking about . Do the degrees work out this way in for any commutative ring ? If not always, when will it work? To explain, determine what the leading coefficient of is for arbitrary polynomials and .  "
},
{
  "id": "ws-algebra-in-other-activity-6-4",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-6-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " If has an identity, the multiplicative identity of is . What elements of will have multiplicative inverses?  "
},
{
  "id": "ws-algebra-in-other-activity-8-1-2",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-8-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Positive reals.",
  "body": " Positive reals  Let denote the set of all positive real numbers. (Note is not positive!) For all define   With these properties, does have an additive identity? If so, what is it?  With these properties, does have a multiplicative identity? If so, what is it?  Is a ring with these operations? Explain each axiom.  Does have zero divisors using these operations?  Is an integral domain using these operations?  "
},
{
  "id": "ws-algebra-in-other-activity-8-1-3",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-8-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "Complex numbers.",
  "body": " Complex numbers  A complex number is any number of the form where and is an imaginary number with the property that . For a complex number , the real number is called the real part of and is called the imaginary part of . So Furthermore, addition and multiplication within are defined by and The complex numbers turn out to be a field. Let's show every nonzero element has a multiplicative inverse. That is, we want to show, for where and are not both , there exists such that   So we want and .   Solve the system of equations   for and , getting expressions that only depend on and . (You can do so using substitution. One way is to solve for in the second equation, plug your answer into the first equation, and then solve for . Then use what you know for to find .)   Verify that your answer in (a) gives the multiplicative inverse for . That is, .  "
},
{
  "id": "ws-algebra-in-other-activity-9-1",
  "level": "2",
  "url": "ws-algebra-in-other-activity.html#ws-algebra-in-other-activity-9-1",
  "type": "Exercise",
  "number": "3",
  "title": "Examples or not?",
  "body": " Examples or not?  Give an example of each of the following or explain why no such example exists.  Two polynomials of degree in whose product is a polynomial of degree .  Two polynomials of degree in whose sum is a polynomial of degree .  Two polynomials of degree in whose product is a polynomial of degree .  "
},
{
  "id": "ws-subrings-activity",
  "level": "1",
  "url": "ws-subrings-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 8: Subrings, Extensions, Direct Sums",
  "body": " Module 8: Subrings, Extensions, Direct Sums  Standing on Shoulders of Giants    What Properties are Inherited?  Here are the properties of a ring. Say is a ring. For each, do you think the property holds for any subset of , or just some subsets of ?   The set is closed under addition.   All subsets of have this property  Some subsets of have this property.     The set is closed under multiplication.   All subsets of have this property  Some subsets of have this property.     Addition is associative.   All subsets of have this property  Some subsets of have this property.     Addition is commutative.   All subsets of have this property  Some subsets of have this property.     The set contains an additive identity.   All subsets of have this property  Some subsets of have this property.     Every element of has an additive inverse within .   All subsets of have this property  Some subsets of have this property.     Multiplication is associative.   All subsets of have this property  Some subsets of have this property.     Multiplication distributes over addition.   All subsets of have this property  Some subsets of have this property.        Subrings   Let be a ring, and let be a subset of . Then is said to be a subring of provided that itself is a ring with the operations of addition and multiplication defined the same as in .   As seen on the previous page - some properties of a ring are inherited for every subset of a ring . This leads us to the subring test.   Let be a ring and let be a subset of . Then is a subring of if    is closed under addition     is closed under multiplication     contains      is closed under additive inverses      The Subring Test simplifies this even further, by combining closure under addition and closure under additive inverses into closure under subtraction. Also, if is nonempty and closed under subtraction, then contains .   The Subring Test  Let be a ring and let be a subset of . Then is a subring of if and only if    is nonempty     is closed under subtraction     is closed under multiplication      Let's work with subrings. Prove or disprove using the subring test:   The set of even integers is a subring of .       The set is a subring of .    The set (with addition and multiplication defined as in ) is a subring of .    Give an example of a subset of that is not a subring.    For each of the sets above, say the strongest possible thing. E.g., is it a ring? Is it a commutative ring? Is it a ring with identity? Is it an integral domain? Is it a field?      Ideals  An ideal is a special kind of subring.   An ideal  in a ring is a subring of such that and for all and .   That is, if you multiply an element of by an element of (in any order), the element of gets sucked in to . So sometimes we say that ideals have the sucking property .    Determine whether the following are ideals of . Justify your answer.                                      Field Extensions  The topic of field extensions is of central importance to much of abstract algebra. Many of the questions pertaining to field extensions have to do with finding solutions to polynomials. E.g., , but doesn't have roots in (that is no for which ).  There are two roots for in : and . But if we use the set , then it's not even a ring. So instead we define field extensions, like .  Define    Show is a subring of , and therefore is a ring.    What do we still need to show that is a field? Prove these properties hold.    Let be a field. A subfield of is a subring of that is also a field. If is a subfield of another field then is said to be a field extension (or simply an extension ) of . How can be seen as a subfield? As a field extension? How can be seen as a field extension?       Direct Sums   Let and be rings. The Cartesian product of and is the set The direct sum of and , denoted is the set with addition and multiplication defined componentwise - that is,     Make addition and multiplication tables for .                                                                                                                                                                                                                                                                     Say the strongest possible thing about . E.g., is it a ring? Is it a commutative ring? Is it a ring with identity? Is it an integral domain? Is it a field?      Review questions Make sure you can answer the following questions:  What is a subring? What is the subring test? Why does it make sense? How do you apply it?  What is an ideal?  What is a subfield? What additional properties does it have that a subring doesn't? What is a field extension?  What is a direct sum?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 8   Subring or not?  Assume is a ring.  Decide whether each of the following sets is a subring of the ring . Prove or disprove!         Which of the sets for have multiplicative identities? For those that do, which elements are units? (Hint: Recall a matrix is invertible if and only if the determinant is nonzero. And taking the determinant of a matrix is simple!)    Principal ideals  Let be a commutative ring with identity and let . The set is an ideal, called the principal ideal generated by .  For , describe the principal ideals , , , , , .  Determine which subset relations hold among the above ideals. E.g. is or or neither? Make a complete list (or diagram!).   Fill in the blanks of the following conjecture (you don't need to prove):   Conjecture: Let . Then if and only if and if and only if .     Same or different?  Compare and contrast the addition and multiplication tables for and . Are they both commutative? Do they both have identity? Do they each have units? How many? Do they each have zero divisors? How many? Could they be considered the same in some way? If not, what makes them different? (Why do you think this is even a question worth asking?)     "
},
{
  "id": "ws-subrings-activity-3-1-3",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " The set is closed under addition.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-4",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " The set is closed under multiplication.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-5",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Addition is associative.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-6",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Addition is commutative.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-7",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " The set contains an additive identity.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-8",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Every element of has an additive inverse within .   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-9",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Multiplication is associative.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-3-1-10",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-3-1-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Multiplication distributes over addition.   All subsets of have this property  Some subsets of have this property.   "
},
{
  "id": "ws-subrings-activity-4-1-2",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-4-1-2",
  "type": "Definition",
  "number": "42",
  "title": "",
  "body": " Let be a ring, and let be a subset of . Then is said to be a subring of provided that itself is a ring with the operations of addition and multiplication defined the same as in .  "
},
{
  "id": "ws-subrings-activity-4-1-4",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-4-1-4",
  "type": "Theorem",
  "number": "43",
  "title": "",
  "body": " Let be a ring and let be a subset of . Then is a subring of if    is closed under addition     is closed under multiplication     contains      is closed under additive inverses     "
},
{
  "id": "ws-subrings-activity-4-1-6",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-4-1-6",
  "type": "Theorem",
  "number": "44",
  "title": "The Subring Test.",
  "body": " The Subring Test  Let be a ring and let be a subset of . Then is a subring of if and only if    is nonempty     is closed under subtraction     is closed under multiplication     "
},
{
  "id": "ws-subrings-activity-4-1-8",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-4-1-8",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " The set of even integers is a subring of .  "
},
{
  "id": "ws-subrings-activity-5-1",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-5-1",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " The set is a subring of .  "
},
{
  "id": "ws-subrings-activity-5-2",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-5-2",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " The set (with addition and multiplication defined as in ) is a subring of .  "
},
{
  "id": "ws-subrings-activity-5-3",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-5-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Give an example of a subset of that is not a subring.  "
},
{
  "id": "ws-subrings-activity-5-4",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-5-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " For each of the sets above, say the strongest possible thing. E.g., is it a ring? Is it a commutative ring? Is it a ring with identity? Is it an integral domain? Is it a field?  "
},
{
  "id": "ws-subrings-activity-6-1-3",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-6-1-3",
  "type": "Definition",
  "number": "45",
  "title": "",
  "body": " An ideal  in a ring is a subring of such that and for all and .  "
},
{
  "id": "ws-subrings-activity-6-1-5",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-6-1-5",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Determine whether the following are ideals of . Justify your answer.                                 "
},
{
  "id": "ws-subrings-activity-7-1-5",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-7-1-5",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Show is a subring of , and therefore is a ring.  "
},
{
  "id": "ws-subrings-activity-7-1-6",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-7-1-6",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " What do we still need to show that is a field? Prove these properties hold.  "
},
{
  "id": "ws-subrings-activity-7-1-7",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-7-1-7",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Let be a field. A subfield of is a subring of that is also a field. If is a subfield of another field then is said to be a field extension (or simply an extension ) of . How can be seen as a subfield? As a field extension? How can be seen as a field extension?  "
},
{
  "id": "ws-subrings-activity-8-1-2",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-8-1-2",
  "type": "Definition",
  "number": "46",
  "title": "",
  "body": " Let and be rings. The Cartesian product of and is the set The direct sum of and , denoted is the set with addition and multiplication defined componentwise - that is,   "
},
{
  "id": "ws-subrings-activity-8-1-3",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-8-1-3",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Make addition and multiplication tables for .  "
},
{
  "id": "ws-subrings-activity-10-1-2",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Subring or not?",
  "body": " Subring or not?  Assume is a ring.  Decide whether each of the following sets is a subring of the ring . Prove or disprove!         Which of the sets for have multiplicative identities? For those that do, which elements are units? (Hint: Recall a matrix is invertible if and only if the determinant is nonzero. And taking the determinant of a matrix is simple!)  "
},
{
  "id": "ws-subrings-activity-10-1-3",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "Principal ideals.",
  "body": " Principal ideals  Let be a commutative ring with identity and let . The set is an ideal, called the principal ideal generated by .  For , describe the principal ideals , , , , , .  Determine which subset relations hold among the above ideals. E.g. is or or neither? Make a complete list (or diagram!).   Fill in the blanks of the following conjecture (you don't need to prove):   Conjecture: Let . Then if and only if and if and only if .   "
},
{
  "id": "ws-subrings-activity-10-1-4",
  "level": "2",
  "url": "ws-subrings-activity.html#ws-subrings-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Same or different?",
  "body": " Same or different?  Compare and contrast the addition and multiplication tables for and . Are they both commutative? Do they both have identity? Do they each have units? How many? Do they each have zero divisors? How many? Could they be considered the same in some way? If not, what makes them different? (Why do you think this is even a question worth asking?)  "
},
{
  "id": "ws-iso-activity",
  "level": "1",
  "url": "ws-iso-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 9: Isomorphisms and Invariants",
  "body": " Module 9: Isomorphisms and Invariants  Same, Same, Different    Isomorphisms  We conjectured in a weekly practice problem that was essentially the same as .  Here are the addition and multiplication tables for .         (0,0)  (0,1)  (0,2)  (1,0)  (1,1)  (1,2)    (0,0)  (0,0)  (0,1)  (0,2)  (1,0)  (1,1)  (1,2)    (0,1)  (0,1)  (0,2)  (0,0)  (1,1)  (1,2)  (1,0)    (0,2)  (0,2)  (0,0)  (0,1)  (1,2)  (1,0)  (1,1)    (1,0)  (1,0)  (1,1)  (1,2)  (0,0)  (0,1)  (0,2)    (1,1)  (1,1)  (1,2)  (1,0)  (0,1)  (0,2)  (0,0)    (1,2)  (1,2)  (1,0)  (1,1)  (0,2)  (0,0)  (0,1)         (0,0)  (0,1)  (0,2)  (1,0)  (1,1)  (1,2)    (0,0)  (0,0)  (0,0)  (0,0)  (0,0)  (0,0)  (0,0)    (0,1)  (0,0)  (0,1)  (0,2)  (0,0)  (0,1)  (0,2)    (0,2)  (0,0)  (0,2)  (0,1)  (0,0)  (0,2)  (0,1)    (1,0)  (0,0)  (0,0)  (0,0)  (1,0)  (1,0)  (1,0)    (1,1)  (0,0)  (0,1)  (0,2)  (1,0)  (1,1)  (1,2)    (1,2)  (0,0)  (0,2)  (0,1)  (1,0)  (1,2)  (1,1)     Here are the addition and multiplication tables for .        0  1  2  3  4  5    0  0  1  2  3  4  5    1  1  2  3  4  5  0    2  2  3  4  5  0  1    3  3  4  5  0  1  2    4  4  5  0  1  2  3    5  5  0  1  2  3  4         0  1  2  3  4  5    0  0  0  0  0  0  0    1  0  1  2  3  4  5    2  0  2  4  0  2  4    3  0  3  0  3  0  3    4  0  4  2  0  4  2    5  0  5  4  3  2  1     Match up the elements of with the elements of .  Hint: Match up identities, units, and zero divisors, and use and .                Write new copies of both tables, but replace each element with your matched up element of .     Isomorphism definition  What we want is for the addition and multiplication tables to match up (up to a reordering). Of course, writing this all down and redrawing addition and multiplication tables would be tedious, and impossible for infinite groups. So, consider that in our addition table we had: and we said So the header column of this entry gets replaced with , the header row with and the entry with . For this to match the addition table, we need which it does! Calling our map or function and writing and , what we need is We call this idea, that , preserving addition .    Let and be rings. An isomorphism is a bijective function such that for all , If there exists an isomorphism from to , then is said to be isomorphic to , denoted .      Proving isomorphism    Let . Then is a ring and .     We'll do the isomorphism part first. Come up with a reasonable function that maps elements of to elements of .    Show is an injection by showing that for two matrices and in , if then .       Show is a surjection by showing that for an arbitrary , there exists an element of that maps to it.    Show preserves addition, that is, show for all , .    Show preserves multiplication, that is, show .    This means . If time: Since is a field, this will actually imply that Is a field. So every nonzero element of is a unit. Can you find the inverse for an arbitrary matrix?      Invariants    An invariant of ring isomorphism is a property such that if satisfies and then satisfies .    Let's prove that having a multiplicative identity is an invariant of rings. That is:    If and are rings, if has a multiplicative identity and , then has a multiplicative identity.     We'll do a direct proof. What should you assume?    One thing you are assuming is that has a multiplicative identity. Write what you can conclude using the definition of multiplicative identity.    One thing you are assuming is that . Write what you can conclude using the definition of isomorphism.    How can you rewrite and ) using the definition of isomorphism?    How can you rewrite and using ?    Let . Use that is a surjection and your work above to show that for all , .       Which of the following do you think are invariants of ring isomorphism?   Number of elements    Commutativity    The existence of an identity    The existence or number of zero divisors    The existence or number of units (in a ring with identity)    Being a field    Being an integral domain       Spoiler alert: they are all invariants!  Show that commutativity is an invariant and use it to conclude that is not isomorphic to .      Disproving isomorphism  Turns out rings can have lots of things in common, e.g., both being fields, and yet not be isomorphic. For example, and are both infinitely large fields, but they are not isomorphic.  Suppose that is an isomorphism.   Show that . (Hint: it suffices to show that for all . You may need to use that fact that is surjective.)    Using a similar argument as above, show that .    Use the definition of isomorphism and your answers to the previous parts to argue that is an element of and . (Hint: Apply to both sides of the equation .)    Explain why the result you proved in the previous part is a contradiction. Deduce that cannot be isomorphic to .       Review questions Make sure you can answer the following questions:  What is the definition of ring isomorphism?  How do you prove two rings are isomorphic?  What are some examples of invariants?  Can you use an invariant to prove two rings are isomorphic? Can you use an invariant to prove two rings are not isomorphic?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 9   The number of zero divisors in a ring is an invariant  Prove that the number of zero divisors in a ring is an invariant under isomorphism by filling in the blanks below.    We will use a lemma, which we will assume without proof.    Let and be isomorphic rings. Let be the additive identity of and be the additive identity of . For any isomorphism , .      Let and be isomorphic rings and let and be the subset of zero divisors of and , respectively. Then and hence, the number of zero divisors is an invariant of ring isomorphism.     Let and be isomorphic rings. Thus, there exists an isomorphism . This means    We will show that if then . That is, we will show that if is a zero divisor in then is . Since is a zero divisor in , and there exists a such that and or . Without loss of generality, suppose . Then   By the lemma  and  . Thus is a . Since is a bijection, .     Use this to prove that is not isomorphic to .        A matrix isomorphism  Let . Let be defined by This problem will show is an isomorphism and thus and are isomorphic.  Show is an injection by showing for if then . Then show is a surjection by showing for an arbitrary there exists such that .  Show preserves addition by showing for all , .  Show preserves multiplication by showing for all , .  The above problems show that is an isomorphism and hence and are isomorphic. Since being a field is an invariant and is a field, we can conclude is a field. Thus, every nonzero element of is a unit. What is the identity of ? Find the multiplicative inverse of .    Homomorphisms: Kind of like isomorphisms, but not  Let and be rings. A function is a homomorphism of rings if and for all . (Notice how this is very similar to the definition of isomorphism , but something important is missing -- which requirement of an isomorphism is not required here?)  Define by . Show that is a homomorphism.  The kernel of a homomorphism is the set . Find for the in part (a).  Prove the kernel you found in part b is an ideal of . (It turns out the kernel of a ring homomorphism is always an ideal.)    "
},
{
  "id": "ws-iso-activity-4-1-3",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-4-1-3",
  "type": "Definition",
  "number": "47",
  "title": "",
  "body": "  Let and be rings. An isomorphism is a bijective function such that for all , If there exists an isomorphism from to , then is said to be isomorphic to , denoted .   "
},
{
  "id": "ws-iso-activity-4-2-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-4-2-2",
  "type": "Theorem",
  "number": "48",
  "title": "",
  "body": "  Let . Then is a ring and .   "
},
{
  "id": "ws-iso-activity-4-2-3",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-4-2-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " We'll do the isomorphism part first. Come up with a reasonable function that maps elements of to elements of .  "
},
{
  "id": "ws-iso-activity-4-2-4",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-4-2-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Show is an injection by showing that for two matrices and in , if then .  "
},
{
  "id": "ws-iso-activity-5-1",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-5-1",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Show is a surjection by showing that for an arbitrary , there exists an element of that maps to it.  "
},
{
  "id": "ws-iso-activity-5-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-5-2",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Show preserves addition, that is, show for all , .  "
},
{
  "id": "ws-iso-activity-5-3",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-5-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Show preserves multiplication, that is, show .  "
},
{
  "id": "ws-iso-activity-5-4",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-5-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " This means . If time: Since is a field, this will actually imply that Is a field. So every nonzero element of is a unit. Can you find the inverse for an arbitrary matrix?  "
},
{
  "id": "ws-iso-activity-6-1-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-2",
  "type": "Definition",
  "number": "49",
  "title": "",
  "body": "  An invariant of ring isomorphism is a property such that if satisfies and then satisfies .   "
},
{
  "id": "ws-iso-activity-6-1-4",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-4",
  "type": "Theorem",
  "number": "50",
  "title": "",
  "body": "  If and are rings, if has a multiplicative identity and , then has a multiplicative identity.   "
},
{
  "id": "ws-iso-activity-6-1-5",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " We'll do a direct proof. What should you assume?  "
},
{
  "id": "ws-iso-activity-6-1-6",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " One thing you are assuming is that has a multiplicative identity. Write what you can conclude using the definition of multiplicative identity.  "
},
{
  "id": "ws-iso-activity-6-1-7",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-7",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " One thing you are assuming is that . Write what you can conclude using the definition of isomorphism.  "
},
{
  "id": "ws-iso-activity-6-1-8",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-8",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " How can you rewrite and ) using the definition of isomorphism?  "
},
{
  "id": "ws-iso-activity-6-1-9",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-9",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " How can you rewrite and using ?  "
},
{
  "id": "ws-iso-activity-6-1-10",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-6-1-10",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let . Use that is a surjection and your work above to show that for all , .  "
},
{
  "id": "ws-iso-activity-7-1",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-7-1",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Which of the following do you think are invariants of ring isomorphism?   Number of elements    Commutativity    The existence of an identity    The existence or number of zero divisors    The existence or number of units (in a ring with identity)    Being a field    Being an integral domain     "
},
{
  "id": "ws-iso-activity-7-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-7-2",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Spoiler alert: they are all invariants!  Show that commutativity is an invariant and use it to conclude that is not isomorphic to .  "
},
{
  "id": "ws-iso-activity-8-1-4",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-8-1-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Show that . (Hint: it suffices to show that for all . You may need to use that fact that is surjective.)  "
},
{
  "id": "ws-iso-activity-8-1-5",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-8-1-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Using a similar argument as above, show that .  "
},
{
  "id": "ws-iso-activity-8-1-6",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-8-1-6",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Use the definition of isomorphism and your answers to the previous parts to argue that is an element of and . (Hint: Apply to both sides of the equation .)  "
},
{
  "id": "ws-iso-activity-8-1-7",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-8-1-7",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Explain why the result you proved in the previous part is a contradiction. Deduce that cannot be isomorphic to .  "
},
{
  "id": "ws-iso-activity-10-1-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "The number of zero divisors in a ring is an invariant.",
  "body": " The number of zero divisors in a ring is an invariant  Prove that the number of zero divisors in a ring is an invariant under isomorphism by filling in the blanks below.    We will use a lemma, which we will assume without proof.    Let and be isomorphic rings. Let be the additive identity of and be the additive identity of . For any isomorphism , .      Let and be isomorphic rings and let and be the subset of zero divisors of and , respectively. Then and hence, the number of zero divisors is an invariant of ring isomorphism.     Let and be isomorphic rings. Thus, there exists an isomorphism . This means    We will show that if then . That is, we will show that if is a zero divisor in then is . Since is a zero divisor in , and there exists a such that and or . Without loss of generality, suppose . Then   By the lemma  and  . Thus is a . Since is a bijection, .     Use this to prove that is not isomorphic to .   "
},
{
  "id": "ws-iso-activity-11-1",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-11-1",
  "type": "Exercise",
  "number": "2",
  "title": "A matrix isomorphism.",
  "body": " A matrix isomorphism  Let . Let be defined by This problem will show is an isomorphism and thus and are isomorphic.  Show is an injection by showing for if then . Then show is a surjection by showing for an arbitrary there exists such that .  Show preserves addition by showing for all , .  Show preserves multiplication by showing for all , .  The above problems show that is an isomorphism and hence and are isomorphic. Since being a field is an invariant and is a field, we can conclude is a field. Thus, every nonzero element of is a unit. What is the identity of ? Find the multiplicative inverse of .  "
},
{
  "id": "ws-iso-activity-11-2",
  "level": "2",
  "url": "ws-iso-activity.html#ws-iso-activity-11-2",
  "type": "Exercise",
  "number": "3",
  "title": "Homomorphisms: Kind of like isomorphisms, but not.",
  "body": " Homomorphisms: Kind of like isomorphisms, but not  Let and be rings. A function is a homomorphism of rings if and for all . (Notice how this is very similar to the definition of isomorphism , but something important is missing -- which requirement of an isomorphism is not required here?)  Define by . Show that is a homomorphism.  The kernel of a homomorphism is the set . Find for the in part (a).  Prove the kernel you found in part b is an ideal of . (It turns out the kernel of a ring homomorphism is always an ideal.)  "
},
{
  "id": "ws-prime-factorization-activity",
  "level": "1",
  "url": "ws-prime-factorization-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 10: Prime Factorization &amp; Division Reprise",
  "body": " Module 10: Prime Factorization & Division Reprise  Atoms    A prime number is an integer whose only positive divisors are 1 and . A positive integer that is greater than 1 and not prime is said to be composite .     The Fundamental Theorem of Arithmetic    Every integer greater than 1 is either prime or a product of primes. Furthermore, this factorization is unique up to the order of the factors.     Example: We'll do a proof by (strong) induction. Let the statement be that is either prime or a product of primes. Say that we are doing the inductive step and need to show that :   Let's prove it! We'll start with the proof of existence. Let and let the statement be that is either prime or a product of primes.   Prove the base case. (What is there to do, even??)    For the inductive step, assume that for some integer , are all true. That is, suppose that for every integer with , is either prime or a product of primes. (This is our inductive hypothesis .)  For the first case, suppose is prime. Explain why is true in this case.   For the second case, suppose is not prime. Explain why it is possible to find integers and such that and .    What does the induction hypothesis allow you to conclude about the integers and from part (b)?    Explain how your answers to parts (b) and (c) prove that is a product of primes. Deduce that is true.    There is a fill-in-the-blank proof near the end of Investigation 1 (p. 14-15) in your textbook.     Euclid's Lemma  To prove the uniqueness part of the Fundamental Theorem of Arithmetic we will need to establish a result called Euclid's Lemma.   Euclid's Lemma   Let and be integers, and let be a prime. If then or .     Pick a non-prime number and show that Euclid's Lemma is not true for . (Show the negation of the conditional statement is true for some choice of integers and .)    Explain why the following is a more general result. That is, why does Euclid's Lemma follow as a corollary from this theorem?    Let and be integers. If and then .      let's prove the theorem, and then get Euclid's Lemma as a corollary.   Use Bezout's identity to translate the assumption into an equation involving a linear combination.    Multiply both sides of your equation from part (a) by an appropriate quantity in order to obtain an equation of the form     How can you use part (b) to conclude ?        Uniqueness proof  Now we're ready to prove the uniqueness part of the Fundamental Theorem of Arithmetic. Recall:   Fundamental Theorem of Arithmetic   Every integer greater than is either prime or a product of primes. Furthermore, this factorization is unique up to the order of the factors.    We'll use the strong form of Euclid's Lemma:   Euclid's Lemma - Strong Form   Let be integers and let be a prime. If , then for some with .     Let be an integer. As usual with uniqueness proofs, we will assume there are two possibilities for the prime factorization. Use 's and 's to describe how is prime factored in two ways.    Explain why Euclid's Lemma - Strong Form implies that for some . Deduce that for some .    Explain how your answer to would allow you to cancel a factor from each side of the equation from . (Does multiplicative cancellation hold in the integers? Why?)    Suppose in , you assumed was the least integer that could be prime factored in ways. Why now do you have a contradiction?       Primes in  Recall that , the set of even integers, is a commutative ring without identity. We have the following definitions:   For , we say that   -divides  provided that there exists such that .    A prime number in  is a positive integer that cannot be written as a product of two other integers in . That is is prime provided that there do not exist even integers and such that .     Let's see if the Fundamental Theorem of Arithmetic holds in .   Give two examples and a non-example of pairs of integers and such that  -divides . (Try to find an example where in the integers, but in .    What are the first 10 prime numbers in ?    Find a way to write as a product of primes in     Can you find another way to write 60 as a product of primes in ?    Is the Fundamental Theorem of Arithmetic true for ? Explain.    Is Euclid's Lemma true for ? Explain.       Irreducible Polynomials  In the integers, we have that Euclid's Lemma holds for prime integers. It turns out there's a difference between being prime and Euclid's Lemma holding in general rings. We have the following definitions, for an integral domain :   Suppose is nonzero and is not a unit. Then is called irreducible in if whenever , with , at least one of or must be a unit in . Otherwise is said to be reducible .    The nonzero element is called prime if it is not a unit and whenever for any , then either or .     It turns out that prime elements are always irreducible, and in something called a principal ideal domain a nonzero element is prime if and only if it is irreducible. But prime and irreducible are not the same in general. To illustrate this point, let's think about irreducible polynomials.    For an integral domain , a polynomial from that is neither the zero polynomial nor a unit in is said to be irreducible over if whenever is expressed as a product with and from , then or is a unit in . A nonzero, nonunit element of that is not irreducible over is called reducible .    The following are examples of reducible and irreducible polynomials.   Consider . Is reducible or irreducible over ? ? ? ? (Hint: What are the units in these integral domains? What are the roots of the polynomial?)    Consider . Show is reducible over . (Hint: Find roots.) Is reducible over ?       Review questions Make sure you can answer the following questions:  How do we define a prime integer?  What does the Fundamental Theorem of Arithmetic say?  How do we prove the existence part of the Fundamental Theorem of Arithmetic? How do we prove the uniqueness part of the Fundamental Theorem of Arithmetic?  What does Euclid's Lemma say? What is an example of Euclid's Lemma not working for non-prime integers? How can we generalize Euclid's Lemma to non primes? To more integers?  What is the difference between being prime and irreducible?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 10   Non-unique factorization  Find an element of other than that has more than one prime factorization in .     An irrational property  Recall that an irrational number is one that cannot be written as a ratio for integers and and . Use Euclid's Lemma to prove that for all positive integers and , if is not an integer then is irrational.     Reducible and irreducible polynomials  Take the following theorem without proof (for now): Let be a field. If and the degree of is or , then is reducible over if and only if has a zero in .  Explain why , , and are fields.  Determine if the these polynomials are reducible or irreducible, by finding zeros and applying the theorem.     over      over      over     (Side quest - you don't have to do this one!) Can you find polynomials and such that for the fields for which is reducible?     "
},
{
  "id": "ws-prime-factorization-activity-3",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-3",
  "type": "Definition",
  "number": "53",
  "title": "",
  "body": "  A prime number is an integer whose only positive divisors are 1 and . A positive integer that is greater than 1 and not prime is said to be composite .   "
},
{
  "id": "ws-prime-factorization-activity-4-2",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-4-2",
  "type": "Theorem",
  "number": "54",
  "title": "",
  "body": "  Every integer greater than 1 is either prime or a product of primes. Furthermore, this factorization is unique up to the order of the factors.   "
},
{
  "id": "ws-prime-factorization-activity-4-3",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-4-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Example: We'll do a proof by (strong) induction. Let the statement be that is either prime or a product of primes. Say that we are doing the inductive step and need to show that :  "
},
{
  "id": "ws-prime-factorization-activity-4-5",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-4-5",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Prove the base case. (What is there to do, even??)  "
},
{
  "id": "ws-prime-factorization-activity-4-6",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-4-6",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " For the inductive step, assume that for some integer , are all true. That is, suppose that for every integer with , is either prime or a product of primes. (This is our inductive hypothesis .)  For the first case, suppose is prime. Explain why is true in this case.   For the second case, suppose is not prime. Explain why it is possible to find integers and such that and .    What does the induction hypothesis allow you to conclude about the integers and from part (b)?    Explain how your answers to parts (b) and (c) prove that is a product of primes. Deduce that is true.   "
},
{
  "id": "ws-prime-factorization-activity-5-1-3",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-5-1-3",
  "type": "Lemma",
  "number": "55",
  "title": "Euclid’s Lemma.",
  "body": " Euclid's Lemma   Let and be integers, and let be a prime. If then or .   "
},
{
  "id": "ws-prime-factorization-activity-5-1-4",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-5-1-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Pick a non-prime number and show that Euclid's Lemma is not true for . (Show the negation of the conditional statement is true for some choice of integers and .)  "
},
{
  "id": "ws-prime-factorization-activity-5-1-5",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-5-1-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Explain why the following is a more general result. That is, why does Euclid's Lemma follow as a corollary from this theorem?    Let and be integers. If and then .    "
},
{
  "id": "ws-prime-factorization-activity-5-1-6",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-5-1-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " let's prove the theorem, and then get Euclid's Lemma as a corollary.   Use Bezout's identity to translate the assumption into an equation involving a linear combination.    Multiply both sides of your equation from part (a) by an appropriate quantity in order to obtain an equation of the form     How can you use part (b) to conclude ?   "
},
{
  "id": "ws-prime-factorization-activity-6-1-3",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-6-1-3",
  "type": "Theorem",
  "number": "57",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic   Every integer greater than is either prime or a product of primes. Furthermore, this factorization is unique up to the order of the factors.   "
},
{
  "id": "ws-prime-factorization-activity-6-1-5",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-6-1-5",
  "type": "Lemma",
  "number": "58",
  "title": "Euclid’s Lemma - Strong Form.",
  "body": " Euclid's Lemma - Strong Form   Let be integers and let be a prime. If , then for some with .   "
},
{
  "id": "e-lem-start",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#e-lem-start",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Let be an integer. As usual with uniqueness proofs, we will assume there are two possibilities for the prime factorization. Use 's and 's to describe how is prime factored in two ways.  "
},
{
  "id": "e-lem-pt2",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#e-lem-pt2",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Explain why Euclid's Lemma - Strong Form implies that for some . Deduce that for some .  "
},
{
  "id": "ws-prime-factorization-activity-6-1-8",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-6-1-8",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Explain how your answer to would allow you to cancel a factor from each side of the equation from . (Does multiplicative cancellation hold in the integers? Why?)  "
},
{
  "id": "ws-prime-factorization-activity-6-1-9",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-6-1-9",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Suppose in , you assumed was the least integer that could be prime factored in ways. Why now do you have a contradiction?  "
},
{
  "id": "ws-prime-factorization-activity-7-1-2",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "  -divides  prime number in  "
},
{
  "id": "ws-prime-factorization-activity-7-1-4",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-4",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Give two examples and a non-example of pairs of integers and such that  -divides . (Try to find an example where in the integers, but in .  "
},
{
  "id": "ws-prime-factorization-activity-7-1-5",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-5",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " What are the first 10 prime numbers in ?  "
},
{
  "id": "ws-prime-factorization-activity-7-1-6",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-6",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Find a way to write as a product of primes in   "
},
{
  "id": "ws-prime-factorization-activity-7-1-7",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-7",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Can you find another way to write 60 as a product of primes in ?  "
},
{
  "id": "ws-prime-factorization-activity-7-1-8",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-8",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Is the Fundamental Theorem of Arithmetic true for ? Explain.  "
},
{
  "id": "ws-prime-factorization-activity-7-1-9",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-7-1-9",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Is Euclid's Lemma true for ? Explain.  "
},
{
  "id": "ws-prime-factorization-activity-8-1-2",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-8-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "irreducible reducible prime "
},
{
  "id": "ws-prime-factorization-activity-8-1-4",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-8-1-4",
  "type": "Definition",
  "number": "59",
  "title": "",
  "body": "  For an integral domain , a polynomial from that is neither the zero polynomial nor a unit in is said to be irreducible over if whenever is expressed as a product with and from , then or is a unit in . A nonzero, nonunit element of that is not irreducible over is called reducible .   "
},
{
  "id": "ws-prime-factorization-activity-8-1-6",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-8-1-6",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Consider . Is reducible or irreducible over ? ? ? ? (Hint: What are the units in these integral domains? What are the roots of the polynomial?)  "
},
{
  "id": "ws-prime-factorization-activity-8-1-7",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-8-1-7",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Consider . Show is reducible over . (Hint: Find roots.) Is reducible over ?  "
},
{
  "id": "ws-prime-factorization-activity-10-1-2",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-10-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "Non-unique factorization.",
  "body": " Non-unique factorization  Find an element of other than that has more than one prime factorization in .   "
},
{
  "id": "ws-prime-factorization-activity-10-1-3",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-10-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "An irrational property.",
  "body": " An irrational property  Recall that an irrational number is one that cannot be written as a ratio for integers and and . Use Euclid's Lemma to prove that for all positive integers and , if is not an integer then is irrational.   "
},
{
  "id": "ws-prime-factorization-activity-10-1-4",
  "level": "2",
  "url": "ws-prime-factorization-activity.html#ws-prime-factorization-activity-10-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Reducible and irreducible polynomials.",
  "body": " Reducible and irreducible polynomials  Take the following theorem without proof (for now): Let be a field. If and the degree of is or , then is reducible over if and only if has a zero in .  Explain why , , and are fields.  Determine if the these polynomials are reducible or irreducible, by finding zeros and applying the theorem.     over      over      over     (Side quest - you don't have to do this one!) Can you find polynomials and such that for the fields for which is reducible?  "
},
{
  "id": "ws-polynomial-rings-activity",
  "level": "1",
  "url": "ws-polynomial-rings-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Module 11: Polynomial Rings &amp; Divisibility",
  "body": " Module 11: Polynomial Rings & Divisibility  The X-Factor    Are polynomials just like integers?  There's a bunch of things we could do in the integers that it turns out we can also do with polynomials. Here's a table to compare\/contrast. (Note here that is a commutative ring.)       Divides   Using your knowledge of divides in the integers, state a definition of divides in the polynomial ring where is a commutative ring.    Does divide in ? Use polynomial long division to determine.    Does divide in ? Use polynomial long division to determine.    (If time:) Prove or disprove:  For a field and , if divides and , , then divides .       The Division Algorithm in   We restrict talking about the division algorithm to where is a field. When is a field, is an integral domain. Why is never a field?    Why is not an integral domain?    Why does for a field not have zero divisors? (Hint: Consider the degree of the product of two polynomials.)    Use and from the previous page to write statements that look like the division algorithm for integers (e.g., , where and , what are and ?).    In the division algorithm we had a restriction on the remainder : . Based on your answer to the previous question, what would be a reasonable restriction on the remainder in the division algorithm in polynomials?    The Division Algorithm for polynomials says: Let be a field and let and be polynomials in with . Then there exist unique polynomials and in such that where or .  What are the similarities and differences with the division algorithm for integers?       Greatest Common Divisor   Suppose in we have and . Note that we have the following    and      and      and      Based on this, what are some common divisors of and ?    If we want the greatest common divisor to be unique, which common divisor should we pick?    Here's a definition:   Let be a field and let that are not both zero. The greatest common divisor of and is the polynomial that satisfies the following three conditions:    divides and divides     If and divides both and then divides      is a monic polynomial (i.e., the leading coefficient is )      What are the similarities and differences between this definition and the integer definition?       Relatively Prime and Euclidean Algorithm   Let be a field. Fill in the definition: Two polynomials and in are relatively prime provided that...    Just like in the integers, one can repeatedly apply the division algorithm to find the greatest common divisor of two polynomials. Apply the Euclidean algorithm to determien for and .       Review questions Make sure you can answer the following questions:   What does it mean for a polynomial to divide another polynomial?    If is a field, what's the strongest thing you can say about ? If is a commutative ring, what's the strongest thing you can say about ?    What does the division algorithm say for where is a field? What are the similarities\/differences with the integer division algorithm?    What is the definition for greatest common divisor of and in ? What are the similarities\/differences with the integers?    What does it mean for two polynomials to be relatively prime? How can you apply the Euclidean algorithm in ?    The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 11   Fill in the table on p. 1 of this module with careful definitions of each.    Find a polynomial GCD  In , let and . Find using the Euclidean algorithm.    Factoring polynomials  In this module we've explored how polynomials are like integers. We've explored factoring polynomials a bit (and you likely explored it a lot in high school). Let's explore some more.  Let be in . Notice that . What is the remainder when is divided by ?  Let be in . Determine and determine the remainder when is divided by .  Let be in . Determine and determine the remainder when is divided by .     "
},
{
  "id": "ws-polynomial-rings-activity-4-1-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-4-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Using your knowledge of divides in the integers, state a definition of divides in the polynomial ring where is a commutative ring.  "
},
{
  "id": "poly-divides-ex-1",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#poly-divides-ex-1",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Does divide in ? Use polynomial long division to determine.  "
},
{
  "id": "poly-divides-ex-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#poly-divides-ex-2",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Does divide in ? Use polynomial long division to determine.  "
},
{
  "id": "ws-polynomial-rings-activity-4-1-5",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-4-1-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " (If time:) Prove or disprove:  For a field and , if divides and , , then divides .  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-2",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " We restrict talking about the division algorithm to where is a field. When is a field, is an integral domain. Why is never a field?  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-3",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-3",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Why is not an integral domain?  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-4",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-4",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Why does for a field not have zero divisors? (Hint: Consider the degree of the product of two polynomials.)  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-5",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-5",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Use and from the previous page to write statements that look like the division algorithm for integers (e.g., , where and , what are and ?).  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-6",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-6",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " In the division algorithm we had a restriction on the remainder : . Based on your answer to the previous question, what would be a reasonable restriction on the remainder in the division algorithm in polynomials?  "
},
{
  "id": "ws-polynomial-rings-activity-5-1-7",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-5-1-7",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " The Division Algorithm for polynomials says: Let be a field and let and be polynomials in with . Then there exist unique polynomials and in such that where or .  What are the similarities and differences with the division algorithm for integers?  "
},
{
  "id": "ws-polynomial-rings-activity-6-1-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-6-1-2",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Suppose in we have and . Note that we have the following    and      and      and      Based on this, what are some common divisors of and ?  "
},
{
  "id": "ws-polynomial-rings-activity-6-1-3",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-6-1-3",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " If we want the greatest common divisor to be unique, which common divisor should we pick?  "
},
{
  "id": "ws-polynomial-rings-activity-6-1-4",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-6-1-4",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Here's a definition:   Let be a field and let that are not both zero. The greatest common divisor of and is the polynomial that satisfies the following three conditions:    divides and divides     If and divides both and then divides      is a monic polynomial (i.e., the leading coefficient is )      What are the similarities and differences between this definition and the integer definition?  "
},
{
  "id": "ws-polynomial-rings-activity-7-1-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-7-1-2",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Let be a field. Fill in the definition: Two polynomials and in are relatively prime provided that...  "
},
{
  "id": "ws-polynomial-rings-activity-7-1-3",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-7-1-3",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Just like in the integers, one can repeatedly apply the division algorithm to find the greatest common divisor of two polynomials. Apply the Euclidean algorithm to determien for and .  "
},
{
  "id": "ws-polynomial-rings-activity-9-1-2",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-9-1-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Fill in the table on p. 1 of this module with careful definitions of each.  "
},
{
  "id": "ws-polynomial-rings-activity-9-1-3",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-9-1-3",
  "type": "Exercise",
  "number": "2",
  "title": "Find a polynomial GCD.",
  "body": " Find a polynomial GCD  In , let and . Find using the Euclidean algorithm.  "
},
{
  "id": "ws-polynomial-rings-activity-9-1-4",
  "level": "2",
  "url": "ws-polynomial-rings-activity.html#ws-polynomial-rings-activity-9-1-4",
  "type": "Exercise",
  "number": "3",
  "title": "Factoring polynomials.",
  "body": " Factoring polynomials  In this module we've explored how polynomials are like integers. We've explored factoring polynomials a bit (and you likely explored it a lot in high school). Let's explore some more.  Let be in . Notice that . What is the remainder when is divided by ?  Let be in . Determine and determine the remainder when is divided by .  Let be in . Determine and determine the remainder when is divided by .  "
},
{
  "id": "portfolios-2",
  "level": "1",
  "url": "portfolios-2.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 1, 2, and 3",
  "body": " Portfolio Problems 1, 2, and 3   Read the guidelines in the Syllabus and review the MTH 210 writing guidelines before starting.  The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately. In particular, remember the golden rule:  Every sentence that you submit must be one that you have generated yourself and that you fully understand.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You'll put all your final drafts of your problems in a portfolio template . You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without citing the commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .    Are additive identities unique?  One of the field axioms is that a field has an additive identity. That is, there exists an element such that . In math we care about the difference between an and the . If we say there’s an additive identity, then we’re not excluding the possibility of there being more than one. Whereas when we say the , we mean there’s exactly one.  So, can we refer to the additive identity of a field? That is, are additive identities unique? Prove (using definitions and field axioms) or disprove.  Note: If you prove, you should state your result as a theorem. One phrasing of the theorem could be Let be a field and suppose that and are both additive identities for . Then .    Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for at most one, for two others make a clear and strong statement and prove it.)  and .  and .  and .   "
},
{
  "id": "portfolios-2-3",
  "level": "2",
  "url": "portfolios-2.html#portfolios-2-3",
  "type": "Portfolio Problem",
  "number": "1",
  "title": "Additive and Multiplicative Cancellation.",
  "body": " Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without citing the commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .  "
},
{
  "id": "portfolios-2-4",
  "level": "2",
  "url": "portfolios-2.html#portfolios-2-4",
  "type": "Portfolio Problem",
  "number": "2",
  "title": "Are additive identities unique?",
  "body": " Are additive identities unique?  One of the field axioms is that a field has an additive identity. That is, there exists an element such that . In math we care about the difference between an and the . If we say there’s an additive identity, then we’re not excluding the possibility of there being more than one. Whereas when we say the , we mean there’s exactly one.  So, can we refer to the additive identity of a field? That is, are additive identities unique? Prove (using definitions and field axioms) or disprove.  Note: If you prove, you should state your result as a theorem. One phrasing of the theorem could be Let be a field and suppose that and are both additive identities for . Then .  "
},
{
  "id": "portfolios-2-5",
  "level": "2",
  "url": "portfolios-2.html#portfolios-2-5",
  "type": "Portfolio Problem",
  "number": "3",
  "title": "Practice with division.",
  "body": " Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for at most one, for two others make a clear and strong statement and prove it.)  and .  and .  and .  "
},
{
  "id": "portfolios-3",
  "level": "1",
  "url": "portfolios-3.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 4, 5, and 6",
  "body": " Portfolio Problems 4, 5, and 6   Read the guidelines in the Syllabus and review the MTH 210 writing guidelines before starting.  The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately. In particular, remember the golden rule:  Every sentence that you submit must be one that you have generated yourself and that you fully understand.  Other reminders:  You can submit 3 drafts per week, including revisions of a previous problem.  You'll put all your final drafts of your problems in a portfolio template . You can start using that now for drafts. Start early and ask for help when you need it!      Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook (this is the very end of Section 1). You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should add detailed explanation for every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.    Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove that addition and multiplication in , as defined in class, are well-defined. There’s a proof of addition on page 32 of your book (just after Definition 2.16). Use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!     Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).    "
},
{
  "id": "portfolios-3-3",
  "level": "2",
  "url": "portfolios-3.html#portfolios-3-3",
  "type": "Portfolio Problem",
  "number": "4",
  "title": "Proving the division algorithm.",
  "body": " Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook (this is the very end of Section 1). You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should add detailed explanation for every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.  "
},
{
  "id": "portfolios-3-4",
  "level": "2",
  "url": "portfolios-3.html#portfolios-3-4",
  "type": "Portfolio Problem",
  "number": "5",
  "title": "Well-defined operations.",
  "body": " Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove that addition and multiplication in , as defined in class, are well-defined. There’s a proof of addition on page 32 of your book (just after Definition 2.16). Use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!   "
},
{
  "id": "portfolios-3-5",
  "level": "2",
  "url": "portfolios-3.html#portfolios-3-5",
  "type": "Portfolio Problem",
  "number": "6",
  "title": "Greatest common divisors.",
  "body": " Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).   "
},
{
  "id": "portfolios-4",
  "level": "1",
  "url": "portfolios-4.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 7, 8, and 9",
  "body": " Portfolio Problems 7, 8, and 9   Read the guidelines in the Syllabus and review the MTH 210 writing guidelines before starting.  The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately. In particular, remember the golden rule:  Every sentence that you submit must be one that you have generated yourself and that you fully understand.  Other reminders:  You can submit 3 drafts per week, including revisions of a previous problem.  You'll put all your final drafts of your problems in a portfolio template . You can start using that now for drafts. Start early and ask for help when you need it!      Units, zero divisors, and gcds  Let with . Let and let . Prove:  is a unit if and only if .  with is a zero divisor if and only if .    The power set ring  Let . This problem is about the power set of with addition and multiplication as defined in Definition 3.6 of your text or the first page of the Module 7 worksheet.  Prove that is the additive identity of .  Prove that every element of has an additive inverse.  Prove that is the multiplicative identity in .  Make a conjecture of the form is a unit if and only if is... and describe how you came up with this conjecture.  Prove the statement you made in the previous problem.    Every field is an integral domain  Prove that every field is an integral domain by proving this lemma: In a ring , if is a unit then is not a zero divisor. Use ring axioms.   "
},
{
  "id": "portfolios-4-3",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-3",
  "type": "Portfolio Problem",
  "number": "7",
  "title": "Units, zero divisors, and gcds.",
  "body": " Units, zero divisors, and gcds  Let with . Let and let . Prove:  is a unit if and only if .  with is a zero divisor if and only if .  "
},
{
  "id": "portfolios-4-4",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-4",
  "type": "Portfolio Problem",
  "number": "8",
  "title": "The power set ring.",
  "body": " The power set ring  Let . This problem is about the power set of with addition and multiplication as defined in Definition 3.6 of your text or the first page of the Module 7 worksheet.  Prove that is the additive identity of .  Prove that every element of has an additive inverse.  Prove that is the multiplicative identity in .  Make a conjecture of the form is a unit if and only if is... and describe how you came up with this conjecture.  Prove the statement you made in the previous problem.  "
},
{
  "id": "portfolios-4-5",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-5",
  "type": "Portfolio Problem",
  "number": "9",
  "title": "Every field is an integral domain.",
  "body": " Every field is an integral domain  Prove that every field is an integral domain by proving this lemma: In a ring , if is a unit then is not a zero divisor. Use ring axioms.  "
},
{
  "id": "portfolios-5",
  "level": "1",
  "url": "portfolios-5.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 10, 11, and 12",
  "body": " Portfolio Problems 10, 11, and 12   This is the last problem set! Remember that you need to complete 10 out of 12 problems for your portfolio.  Read the guidelines in the Syllabus and review the MTH 210 writing guidelines before starting.  The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately. In particular, remember the golden rule:  Every sentence that you submit must be one that you have generated yourself and that you fully understand.  Final reminders:  You can submit 3 drafts per week, including revisions of a previous problem. Don't stop now!  Make sure to assemble all of your portfolio solutions in the portfolio template . Start early and ask for help when you need it!      Centralizers   We won’t explicitly cover this definition in class, this problem can be done any time! Please ask me if you need help (instead of asking AI!) -- I will happily give hints.  Let be a ring and let . The centralizer of is defined to be the set of all such that . We write for the centralizer of .   Find two elements of the centralizer of in .  Prove that is a subring of . (Use the subring test from Module 8!)  Is the centralizer of necessarily commutative?    Invariants  (Can be done after Module 9.) Recall that an invariant of a ring isomorphism is a property that is shared by rings that are isomorphic. That is, if is isomorphic to and satisfies some property (like having identity), then must have the same property.  Prove the following: Let and be rings, and let be an isomorphism. If has identity, say , then also has identity. Specifically, is an identity for . (Note, this proof is on page 109 in Activity 7.14, as usual you must fill in the missing details and expand on the ? s.)  Use part (a) to show that is not isomorphic to .  Prove that if and are isomorphic rings and is commutative then is commutative.  Use part (c) to show that and are not isomorphic.    Characteristic  Let be a ring. For any integer and any we define The characteristic of , denoted char( ), is the smallest positive integer such that for all . If no such integer exists, then is said to have characteristic zero . Find the characteristic of . Prove your answer. (You might take inspiration from the proof of Theorem 5.12 on p. 79 of your textbook.)  "
},
{
  "id": "portfolios-5-3",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-3",
  "type": "Portfolio Problem",
  "number": "10",
  "title": "Centralizers.",
  "body": " Centralizers   We won’t explicitly cover this definition in class, this problem can be done any time! Please ask me if you need help (instead of asking AI!) -- I will happily give hints.  Let be a ring and let . The centralizer of is defined to be the set of all such that . We write for the centralizer of .   Find two elements of the centralizer of in .  Prove that is a subring of . (Use the subring test from Module 8!)  Is the centralizer of necessarily commutative?  "
},
{
  "id": "portfolios-5-4",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-4",
  "type": "Portfolio Problem",
  "number": "11",
  "title": "Invariants.",
  "body": " Invariants  (Can be done after Module 9.) Recall that an invariant of a ring isomorphism is a property that is shared by rings that are isomorphic. That is, if is isomorphic to and satisfies some property (like having identity), then must have the same property.  Prove the following: Let and be rings, and let be an isomorphism. If has identity, say , then also has identity. Specifically, is an identity for . (Note, this proof is on page 109 in Activity 7.14, as usual you must fill in the missing details and expand on the ? s.)  Use part (a) to show that is not isomorphic to .  Prove that if and are isomorphic rings and is commutative then is commutative.  Use part (c) to show that and are not isomorphic.  "
},
{
  "id": "portfolios-5-5",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-5",
  "type": "Portfolio Problem",
  "number": "12",
  "title": "Characteristic.",
  "body": " Characteristic  Let be a ring. For any integer and any we define The characteristic of , denoted char( ), is the smallest positive integer such that for all . If no such integer exists, then is said to have characteristic zero . Find the characteristic of . Prove your answer. (You might take inspiration from the proof of Theorem 5.12 on p. 79 of your textbook.) "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
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
