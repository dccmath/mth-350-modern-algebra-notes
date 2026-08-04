var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-fields-activity",
  "level": "1",
  "url": "ws-fields-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 1: Fields",
  "body": " Week 1: Fields  The Good Place    Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of natural numbers is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of complex numbers is     The set of  matrices with real entries is            Binary Operations  Our English word algebra comes from the Arabic word al-jabr, which means the reunion of broken parts . It is not surprising, then, that we will be considering ways of combining two elements of a set into one; to do this, we turn to a particular type of function, known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that we say that is closed under the operation .      Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .     Fields  A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all and .     Addition and multiplication are associative , meaning that for all , , and .     Addition and multiplication are commutative , that is, for all , and .     The set contains an additive identity . That is, there exists an element such that .     The set contains a multiplicative identity . That is, there exists an element such that for all , .     Every element of has an additive inverse within  , meaning that for every , there exists a such that .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .          For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?       Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you add like terms , in multiplication you need to use the distributive property).    Which of the properties of a field do polynomials have?      Other Operations   Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?       Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)   Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for rectangle multiplication .   Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!       Summarize   Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                                 Review questions   What are the sets and ?   What is a binary operation? And what does it mean for a binary operation to be closed?  What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?  Why do you think DocK called fields The Good Place ?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 1   A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?     Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.    Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!       "
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
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?   "
},
{
  "id": "ws-fields-activity-6-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Which of the properties of a field do polynomials have?   "
},
{
  "id": "ws-fields-activity-6-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-2-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?  "
},
{
  "id": "ws-rectangle-math-1-6",
  "level": "2",
  "url": "ws-fields-activity.html#ws-rectangle-math-1-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!  "
},
{
  "id": "sec-fields-review-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#sec-fields-review-1-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                            "
},
{
  "id": "ws-fields-activity-10-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "A field of ordered pairs?",
  "body": " A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?   "
},
{
  "id": "ws-fields-activity-10-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Playing with distribution.",
  "body": " Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.  "
},
{
  "id": "ws-fields-activity-10-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-4",
  "type": "Worksheet Exercise",
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
  "title": "Week 2: Divisibility of Integers, Division Algorithm, Integer Congruence",
  "body": " Week 2: Divisibility of Integers, Division Algorithm, Integer Congruence  The Leftovers    The Integers  We'll assume the following about the integers as axioms . We don't prove axioms, we use them as building blocks to prove them. They give us a floor to stand on. Otherwise it's turtles all the way down.   Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .       Which axioms of a field are the integers missing?      Divides    An integer  divides an integer , denoted , if there exists an integer such that .    In a popular high school mathematics textbook, students are told that one of the theorems in number theory is the following:   If and are integers where is a factor of and is a factor of , then is a factor of .     Prove . It may help to translate this to use the word divides .      Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.        The Division Algorithm   The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .      Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.      What is different about applying the division algorithm when ?      Do you think we should we assume the division algorithm as an axiom or try to prove it?      Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?        More Division Algorithm    If prove that . (Use the definition of the set .) If , is ?       We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .     At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?      Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)     You've reached a contradiction, how?     What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!        Congruence    Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .    Examples: Here's a chance to remember congruences:    Give an example of two integers that are congruent modulo , where one is positive and one is negative.      Characterize all the integers such that . What are all the integers such that ?      Prove that, for all and , if and then .      Prove that for all and , if and then .        Fun with Congruence (and a connection to fields)    Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?       Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!         My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?        Review questions  Make sure you can answer the following questions:   What is the definition of divides ? Does where ? Does where .  State the division algorithm and apply to any pair of integers satisfying the hypothesis.  State the definition of and be able to determine if any pair of integers and are congruent modulo .   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 2   Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?    Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by .     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.    UPCs!  Find a product with a UPC and verify the check digit.    Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has 2 solutions.     "
},
{
  "id": "ws-divisibility-activity-3-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-3-1-3",
  "type": "Axiom",
  "number": "10",
  "title": "Axioms of Integer Arithmetic.",
  "body": " Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .     "
},
{
  "id": "ws-divisibility-activity-4-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-2",
  "type": "Definition",
  "number": "11",
  "title": "",
  "body": "  An integer  divides an integer , denoted , if there exists an integer such that .   "
},
{
  "id": "divides-div-thm",
  "level": "2",
  "url": "ws-divisibility-activity.html#divides-div-thm",
  "type": "Theorem",
  "number": "12",
  "title": "",
  "body": " If and are integers where is a factor of and is a factor of , then is a factor of .  "
},
{
  "id": "ws-divisibility-activity-4-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-5",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Prove . It may help to translate this to use the word divides .   "
},
{
  "id": "ws-divisibility-activity-4-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-6",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.   "
},
{
  "id": "ws-divisibility-activity-5-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-2",
  "type": "Theorem",
  "number": "16",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .   "
},
{
  "id": "ws-divisibility-activity-5-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.   "
},
{
  "id": "ws-divisibility-activity-5-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  What is different about applying the division algorithm when ?   "
},
{
  "id": "ws-divisibility-activity-5-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Do you think we should we assume the division algorithm as an axiom or try to prove it?   "
},
{
  "id": "ws-divisibility-activity-5-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-6",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?   "
},
{
  "id": "ws-divisibility-activity-6-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  If prove that . (Use the definition of the set .) If , is ?    "
},
{
  "id": "ws-divisibility-activity-6-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .  "
},
{
  "id": "ws-divisibility-activity-6-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?   "
},
{
  "id": "ws-divisibility-activity-6-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-5",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)   "
},
{
  "id": "ws-divisibility-activity-6-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-6",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": " You've reached a contradiction, how?  "
},
{
  "id": "ws-divisibility-activity-6-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-7",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": "  What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!   "
},
{
  "id": "ws-divisibility-activity-7-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-2",
  "type": "Definition",
  "number": "28",
  "title": "",
  "body": "  Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .   "
},
{
  "id": "ws-divisibility-activity-7-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-4",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": "  Give an example of two integers that are congruent modulo , where one is positive and one is negative.   "
},
{
  "id": "ws-divisibility-activity-7-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-5",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": "  Characterize all the integers such that . What are all the integers such that ?   "
},
{
  "id": "ws-divisibility-activity-7-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-6",
  "type": "Worksheet Exercise",
  "number": "15",
  "title": "",
  "body": "  Prove that, for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-7-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-7",
  "type": "Worksheet Exercise",
  "number": "16",
  "title": "",
  "body": "  Prove that for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-8-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-2",
  "type": "Worksheet Exercise",
  "number": "17",
  "title": "",
  "body": "  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?   "
},
{
  "id": "ws-divisibility-activity-8-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-3",
  "type": "Worksheet Exercise",
  "number": "18",
  "title": "",
  "body": "   Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!      "
},
{
  "id": "ws-divisibility-activity-8-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-4",
  "type": "Worksheet Exercise",
  "number": "19",
  "title": "",
  "body": "  My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?   "
},
{
  "id": "ws-divisibility-activity-10-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Fun (?) with fields (?).",
  "body": " Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?  "
},
{
  "id": "ws-divisibility-activity-10-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Another way to talk about congruences.",
  "body": " Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by .     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.  "
},
{
  "id": "ws-divisibility-activity-10-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "UPCs!",
  "body": " UPCs!  Find a product with a UPC and verify the check digit.  "
},
{
  "id": "ws-divisibility-activity-10-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Another way congruences are weird.",
  "body": " Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has 2 solutions.  "
},
{
  "id": "ws-equivalence-zn-activity",
  "level": "1",
  "url": "ws-equivalence-zn-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 3: Equivalence Relations, Equivalence Classes, and <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span>",
  "body": " Week 3: Equivalence Relations, Equivalence Classes, and  A Strange New World    Equivalence Relations   Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .        Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .          Reflexive  Symmetric  Transitive    1.          2.          3.          4.          5.                Equivalence Classes    Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,      Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in (a) on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in (e). on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are also called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in (b) on the previous page? What about ? How is this different than what happened in previous questions?        Some Properties of Equivalence Classes  The reason we define an equivalence relation to have the properties reflexive, symmetric, and transitive is that it leads to equivalence classes that have some special properties.    We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of for which congruence classes modulo are equal. Is where is congruence modulo ? Then give an example for which , and determine if .    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?     Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes corresponding to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?          The Number System  For our purposes, the most important equivalence relation will be congruence modulo . This allows us to define the number system :   For every integer , the integers modulo denoted , is the set of the distinct congruence classes of modulo , i.e.,    We can make into a number system by defining addition and multiplication on the set:   Addition:     Multiplication:    This may seem like a silly thing to do, but remember that is actually an infinite set! In fact, the two 's actually, in a sense, have a different meaning. The one on the left is saying add these infinite sets and the one on the right is saying add these two integers .  Let's consider . We'll find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out that it's OK: Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .    Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                                    Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Which is this table for?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a field do these have?      Review questions   What is an equivalence relation? What does it mean to be reflexive, symmetric, and transitive?  What is an equivalence class? What is a congruence class?  How do we add and multiply congruence classes?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 3   Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .    When is a field?  Based on your work for this module, make a conjecture for when is a field. State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.    Multiplicative cancellation  One of the things our high school teachers told us about is multiplicative cancellation (although they probably didn't use those words). As an example, if we have we could cancel the 's so that we have . But in high school we were almost always working in . This question asks about multiplicative cancellation in .  The statement at the start isn't quite precise enough. There's one value for which multiplicative cancellation doesn't work. What is it, and why doesn't it work?  Consider . For with , if does ? (Hint: Look at your multiplication table for !)  Consider . For with , if does ?  You should have gotten two different answers for (a) and (b). What's different about 11 vs. 12?  What if I told you is a field? What axioms might you use to prove part (c) is true?     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-2",
  "type": "Definition",
  "number": "41",
  "title": "",
  "body": " Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .   "
},
{
  "id": "ws-equivalence-zn-activity-3-1-4-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-4-1",
  "type": "Table",
  "number": "43",
  "title": "",
  "body": "     Reflexive  Symmetric  Transitive    1.          2.          3.          4.          5.          "
},
{
  "id": "ws-equivalence-zn-activity-4-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-2",
  "type": "Definition",
  "number": "44",
  "title": "",
  "body": "  Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,    "
},
{
  "id": "ws-equivalence-zn-activity-4-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in (a) on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in (e). on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are also called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in (b) on the previous page? What about ? How is this different than what happened in previous questions?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of for which congruence classes modulo are equal. Is where is congruence modulo ? Then give an example for which , and determine if .    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes corresponding to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?     "
},
{
  "id": "ws-equivalence-zn-activity-6-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-3",
  "type": "Definition",
  "number": "50",
  "title": "",
  "body": " For every integer , the integers modulo denoted , is the set of the distinct congruence classes of modulo , i.e.,   "
},
{
  "id": "ws-equivalence-zn-activity-6-1-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-5",
  "type": "Example",
  "number": "51",
  "title": "",
  "body": "Let's consider . We'll find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out that it's OK: Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .  "
},
{
  "id": "ws-equivalence-zn-activity-6-1-6",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                              "
},
{
  "id": "ws-equivalence-zn-activity-7-1-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-7-1-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": " Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).  "
},
{
  "id": "ws-equivalence-zn-activity-8-1-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-1-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "Which is this table for? "
},
{
  "id": "ws-equivalence-zn-activity-8-1-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-1-5",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a field do these have? "
},
{
  "id": "ws-equivalence-zn-activity-10-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Fractions and relations.",
  "body": " Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "When is <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span> a field?",
  "body": " When is a field?  Based on your work for this module, make a conjecture for when is a field. State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-4",
  "type": "Worksheet Exercise",
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
  "title": "Week 4: Greatest Common Divisors, the Euclidean Algorithm, and Linear Combinations",
  "body": " Week 4: Greatest Common Divisors, the Euclidean Algorithm, and Linear Combinations  Numbers    Greatest Common Divisors  Here's the formal definition of greatest common divisor:    Let and be integers, not both zero. A common divisor of and is any integer such that and . We say that an integer is the greatest common divisor of and , denoted , provided that is a common divisor of and , and if is a common divisor of and then .      Applying The Euclidean Algorithm  Find using the Euclidean algorithm. If you'd like another example see page 26 of your text.      Why The Euclidean Algorithm Works  Here's a theorem that explains why the Euclidean algorithm works:    Let and be integers, not both and suppose that for some integers and . Then .          Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .    Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .    How do the previous 2 parts show that ?    How is this theorem related to the Euclidean algorithm?       Linear Combinations and Back Substitution    Let and be integers. A linear combination of and is an integer that can be written as for some integers and .    Recall that we found using the Euclidean algorithm as follows:   Using these equations, we will find integers and such that .   Note from equation we have Solve for in equation and substitute into this equation. Do not simplify.    Rewrite the equation you found in (a) so that you have 45 as a linear combination of and .    Now, using equation , substitute for in the equation you have for part (b). Rewrite so that you have as a linear combination of and .        Using the Euclidean algorithm you can always find . Then using this back-substitution method with the Euclidean algorithm you can always write the greatest common divisor of and as a linear combination of and . Together some call this the Extended Euclidean Algorithm . Using the Euclidean Algorithm find and find and such that .     If time: Are these linear combinations unique? E.g., can you find more than one linear combination of and that equals ?     If time: Use your work finding to write as a linear combination of and .       Bezout's Identity  Here are two important theorems in number theory:   Bezout's Identity   Let and be integers, not both zero. Then can be written as a linear combination of and . That is, there exist integers and such that     This is at first surprising! There is no reason there should be integers and such that . But based on the work on the previous page, you can always back-substitute from the Euclidean algorithm.    Let and be integers, not both zero. Then is equal to the smallest positive linear combination of and .    The fact that it is the smallest positive linear combination is a Weekly Practice Problem - divides every linear combination of and .  We will skip proofs of these theorems and opt to see applications of these theorems instead.   Suppose and . Then, letting and we find . Does it follow from Bezout's Identity that ?    Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Hint: Show divides any linear combination of and .    Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Note: For two integers and , not both , we say and are relatively prime provided that .       Fun With Linear Combinations    Let's see a connection between Multiplicative Inverses and GCD's:    In , find . That is, find the multiplicative inverse of in .    Find a linear combination of and that is equal to . (If you don't see it right away, use the Euclidean Algorithm and back substitution, it's good practice!) How is your answer related to the multiplicative inverse of in ?    Does have a multiplicative inverse in ? How does this relate to greatest common divisors and linear combinations?      In Die Hard 2, there's a scene where a bomb will go off unless they get exactly 4 gallons of water in a jug. In the movie, they are given a 5 gallon jug and a 3 gallon jug and a fountain with unlimited water.    How can you get 4 gallons of water in a jug in this situation?    Note that . Write for some integers and . How does this give you instructions for how to get 1 gallon of water in one of the jugs? (If time: Is there a unique solution?)    In Die Hard 25, they are given a gallon jug and a gallon jug, and asked to get gallons of water in a jug. Is this possible? Why or why not?        Review questions Make sure you can answer the following questions:   What is the formal definition of the greatest common divisor of two integers, that is ?    What is the Euclidean algorithm, how do we apply it, and why does it work?    How can we use the Euclidean algorithm and \"back-substitution\" to write as a linear combination of and ?    What does Bezout's identity say? What are some erroneous applications of Bezout's identity?    The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 4   (This is good practice for Learning Target 6.) For each of the following values of and , use the Euclidean algorithm to determine . Then find integers and such that .    ,      ,      , . (Note we did in class!)     (This is good practice for Learning Target 7.) Decide whether each of the following statements is true or false. For those that are true, explain why. For those that are false, give a counterexample and then change one word or symbol in the statement to make it true. For each statement, assume that and are positive integers.  If for some integers and , then .  If for some integers and , then .  If for some integers and , then .    Prove that divides every linear combination of and . That is, prove that for all , . Explain why this proves the Corollary to Bezout's Identity given in this packet.     "
},
{
  "id": "ws-gcd-activity-3-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-3-1-3",
  "type": "Definition",
  "number": "59",
  "title": "",
  "body": "  Let and be integers, not both zero. A common divisor of and is any integer such that and . We say that an integer is the greatest common divisor of and , denoted , provided that is a common divisor of and , and if is a common divisor of and then .   "
},
{
  "id": "ws-gcd-activity-4-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-3",
  "type": "Theorem",
  "number": "60",
  "title": "",
  "body": "  Let and be integers, not both and suppose that for some integers and . Then .   "
},
{
  "id": "ws-gcd-activity-4-1-4",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .  "
},
{
  "id": "ws-gcd-activity-4-1-5",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-5",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Assuming the hypothesis of the theorem, prove that if is a common divisor of and then is a common divisor of and .  "
},
{
  "id": "ws-gcd-activity-4-1-6",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-6",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " How do the previous 2 parts show that ?  "
},
{
  "id": "ws-gcd-activity-4-1-7",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-4-1-7",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " How is this theorem related to the Euclidean algorithm?  "
},
{
  "id": "ws-gcd-activity-5-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-2",
  "type": "Definition",
  "number": "65",
  "title": "",
  "body": "  Let and be integers. A linear combination of and is an integer that can be written as for some integers and .   "
},
{
  "id": "ws-gcd-activity-5-1-6",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Note from equation we have Solve for in equation and substitute into this equation. Do not simplify.  "
},
{
  "id": "ws-gcd-activity-5-1-7",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": " Rewrite the equation you found in (a) so that you have 45 as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-5-1-8",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-5-1-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": " Now, using equation , substitute for in the equation you have for part (b). Rewrite so that you have as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-6-1-1",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-1-1",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": " Using the Euclidean algorithm you can always find . Then using this back-substitution method with the Euclidean algorithm you can always write the greatest common divisor of and as a linear combination of and . Together some call this the Extended Euclidean Algorithm . Using the Euclidean Algorithm find and find and such that .  "
},
{
  "id": "ws-gcd-activity-6-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-1-2",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  If time: Are these linear combinations unique? E.g., can you find more than one linear combination of and that equals ?  "
},
{
  "id": "ws-gcd-activity-6-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  If time: Use your work finding to write as a linear combination of and .  "
},
{
  "id": "ws-gcd-activity-7-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-3",
  "type": "Theorem",
  "number": "72",
  "title": "Bezout’s Identity.",
  "body": " Bezout's Identity   Let and be integers, not both zero. Then can be written as a linear combination of and . That is, there exist integers and such that    "
},
{
  "id": "ws-gcd-activity-7-1-5",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-5",
  "type": "Corollary",
  "number": "73",
  "title": "",
  "body": "  Let and be integers, not both zero. Then is equal to the smallest positive linear combination of and .   "
},
{
  "id": "ws-gcd-activity-7-1-8",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-8",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": " Suppose and . Then, letting and we find . Does it follow from Bezout's Identity that ?  "
},
{
  "id": "ws-gcd-activity-7-1-9",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-9",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": " Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Hint: Show divides any linear combination of and .  "
},
{
  "id": "ws-gcd-activity-7-1-10",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-7-1-10",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": " Let and be integers. Suppose there exist integers and such that . Does it follow that ? If so, explain. If not, what can you say about ? Note: For two integers and , not both , we say and are relatively prime provided that .  "
},
{
  "id": "ws-gcd-activity-8-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-8-1-2",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": "  Let's see a connection between Multiplicative Inverses and GCD's:    In , find . That is, find the multiplicative inverse of in .    Find a linear combination of and that is equal to . (If you don't see it right away, use the Euclidean Algorithm and back substitution, it's good practice!) How is your answer related to the multiplicative inverse of in ?    Does have a multiplicative inverse in ? How does this relate to greatest common divisors and linear combinations?   "
},
{
  "id": "ws-gcd-activity-8-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-8-1-3",
  "type": "Worksheet Exercise",
  "number": "15",
  "title": "",
  "body": "  In Die Hard 2, there's a scene where a bomb will go off unless they get exactly 4 gallons of water in a jug. In the movie, they are given a 5 gallon jug and a 3 gallon jug and a fountain with unlimited water.    How can you get 4 gallons of water in a jug in this situation?    Note that . Write for some integers and . How does this give you instructions for how to get 1 gallon of water in one of the jugs? (If time: Is there a unique solution?)    In Die Hard 25, they are given a gallon jug and a gallon jug, and asked to get gallons of water in a jug. Is this possible? Why or why not?   "
},
{
  "id": "ws-gcd-activity-10-1-2",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " (This is good practice for Learning Target 6.) For each of the following values of and , use the Euclidean algorithm to determine . Then find integers and such that .    ,      ,      , . (Note we did in class!)   "
},
{
  "id": "ws-gcd-activity-10-1-3",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " (This is good practice for Learning Target 7.) Decide whether each of the following statements is true or false. For those that are true, explain why. For those that are false, give a counterexample and then change one word or symbol in the statement to make it true. For each statement, assume that and are positive integers.  If for some integers and , then .  If for some integers and , then .  If for some integers and , then .  "
},
{
  "id": "ws-gcd-activity-10-1-4",
  "level": "2",
  "url": "ws-gcd-activity.html#ws-gcd-activity-10-1-4",
  "type": "Worksheet Exercise",
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
  "title": "Week 5: Rings, Units, Zero Divisors, and Integral Domains",
  "body": " Week 5: Rings, Units, Zero Divisors, and Integral Domains  Almost Perfect    Definitions   A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .         For each of the definitions below, list an example and a non-example. I.e., list something that is a commutative ring and something that is not a commutative ring. Some examples of number systems you might use: , , , , , , (the even numbers).    Commutative ring: Let be a ring. Then is said to be commutative if multiplication in is commutative, that is, if for all .   Example:  Nonexample:      Ring with identity: Let be a ring. An identity for is an element such that and for all . If such an element exists, then is said to be a ring with identity .   Example:  Nonexample:      Zero divisors: Let be a ring. An element is said to be a zero divisor if and or for some nonzero .   Example (ring and element):  Nonexample:      Multiplicative inverse: Let be a ring with identity and let . An element is said to be a multiplicative inverse of provided that .   Example (ring and element):  Nonexample:      Units: Let be a ring with identity. An element is said to be a unit provided that contains a multiplicative inverse for . In other words, is a unit if and only if there exists such that .   Example (ring and element):  Nonexample:      Integral Domain: An integral domain is a commutative ring with identity that contains no zero divisors.   Example:  Nonexample:      Field: A field is a commutative ring with identity in which every nonzero element has a multiplicative inverse.   Example:  Nonexample:        Units and Zero Divisors in  In this activity we'll work to determine (and prove) exactly when an element of is a unit or a zero divisor.   Look back at multiplication tables you have for various . For at least four of them, list the units and the zero divisors.    units  zero divisors      Determining whether an element of is a unit or a zero divisor has something to do with last week's module. What do you notice about the units and zero divisors in your lists? (Hint: Consider their relationship to .) Then fill in the conjectures:    Let with , and let . Then is a unit in if and only if...    Let with , and let . Then is a zero divisor in if and only if...     In last week's module you found and . Reduce both sides modulo to find the multiplicative inverse of in .     Proofs! Next we'll prove the conjectures you made above. First, we'll prove the forward direction of the unit part.  Suppose with and . Suppose is a unit in .    Write down what it means for to be a unit in .    Recall from Module 3 that two equivalence classes are equal, , if and only if . Translate your statement above using this fact.    Find a linear combination of and that is equal to . What does this say about ? (Hint: Bezout's identity.)         (Backward direction of the unit part.) Suppose with and . Suppose . Apply Bezout's identity and reduce modulo . How does this show is a unit in ?     (Forward direction of the zero divisor part.) Suppose with , and . Suppose is a zero divisor in .    Write down a careful definition of what it means for to be a zero divisor.    Suppose . Apply Bezout's identity, and multiply the result by . Conclude . Why is this a contradiction?     (Finally: Backward direction of the zero divisor part.) Suppose with and with . Suppose . Let . Show that is an integer, and .       Be careful - not everything has to be a unit or a zero divisor (or ). What are the units in ? What are the zero divisors in ? Are there elements that are neither units nor zero divisors?    Polynomials   Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted .    Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring with identity?    Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?       Review questions  Make sure you can answer the following questions:   What's a ring? A commutative ring? A ring with identity? A multiplicative inverse? A zero divisor? A unit? An integral domain? A field? Make sure you can give examples and nonexamples of each and varying combinations.  How can you tell if $[a]$ in $\\mathbb{Z}_n$ is a zero divisor or a unit? How can you use an algorithm to find the multiplicative inverse of $[a]$ in $\\mathbb{Z}_n$? Is everything in a ring a zero divisor, a unit, or zero?  What's a polynomial ring? Are polynomial rings always commutative? Do they always have identity? Are they always integral domains?   The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 5   Let with , . Determine whether each of the following statements are true or false. Justify your answers. Not all of these are true!    If is a zero divisor, then is not a unit.    If is not a unit, then is a zero divisor.    If is a unit then is not a zero divisor.    If is not a zero divisor, then is a unit.     Back to units and zero divisors in .  Consider . Since 16 and 24 are not relatively prime, it should follow that is a zero divisor in . Let's show is a zero divisor. Find . Show is a nonzero integer, and .  Generalize what you did in part (a) to , thus showing that if then is a zero divisor in .  Now, assume is a unit. Let's show . Since is a unit, there exists such that . This can be rewritten as . This means and are equal as congruence classes.  First, recall this Lemma from Module 3:    Apply the Lemma (here is congruence modulo ), and then work with what you get to show that there's a linear combination of and equal to . Then conclude that .    Let be a ring. Suppose that due to a printer error, the addition and multiplication tables for were printed with several missing entries, as shown below:     +                                                                                                      Using only the ring axioms, complete the tables. Explain how each entry you add can be determined from the ring axioms and the entries already completed. (Hints: Some important ring axioms are addition being commutative, and the distributive property. Recall Weekly Practice from Module 1 #3. Also, you can use Proof Portfolio Problem 6a, which is true in rings (not just fields). Note 5b is not true for all rings.)      For which is an integral domain? A field?     "
},
{
  "id": "ws-rings-activity-3-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-3-1-2",
  "type": "Definition",
  "number": "82",
  "title": "",
  "body": " A ring is a set together with two binary operations, called addition ( ) and multiplication ( ), such that all of the following axioms hold:   The set is closed under addition and multiplication, meaning that for all , and .  Addition is associative, meaning that for all , .  Addition is commutative, meaning that for all , .  The set contains an additive identity, also called a zero element , meaning that there exists some element such that for all .  Every element of has an additive inverse within , meaning that for every , there exists such that .  Multiplication is associative, meaning that for all , .  Multiplication distributes over addition, meaning that for all , and .   "
},
{
  "id": "ws-rings-activity-4-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Commutative ring: Let be a ring. Then is said to be commutative if multiplication in is commutative, that is, if for all .   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Ring with identity: Let be a ring. An identity for is an element such that and for all . If such an element exists, then is said to be a ring with identity .   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Zero divisors: Let be a ring. An element is said to be a zero divisor if and or for some nonzero .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Multiplicative inverse: Let be a ring with identity and let . An element is said to be a multiplicative inverse of provided that .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-6",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Units: Let be a ring with identity. An element is said to be a unit provided that contains a multiplicative inverse for . In other words, is a unit if and only if there exists such that .   Example (ring and element):  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-7",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Integral Domain: An integral domain is a commutative ring with identity that contains no zero divisors.   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-4-1-8",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-4-1-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Field: A field is a commutative ring with identity in which every nonzero element has a multiplicative inverse.   Example:  Nonexample:   "
},
{
  "id": "ws-rings-activity-5-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": " Look back at multiplication tables you have for various . For at least four of them, list the units and the zero divisors.    units  zero divisors   "
},
{
  "id": "ws-rings-activity-5-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Determining whether an element of is a unit or a zero divisor has something to do with last week's module. What do you notice about the units and zero divisors in your lists? (Hint: Consider their relationship to .) Then fill in the conjectures:    Let with , and let . Then is a unit in if and only if...    Let with , and let . Then is a zero divisor in if and only if...   "
},
{
  "id": "ws-rings-activity-5-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-5",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": " In last week's module you found and . Reduce both sides modulo to find the multiplicative inverse of in .  "
},
{
  "id": "ws-rings-activity-5-1-6",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-5-1-6",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "  Proofs! Next we'll prove the conjectures you made above. First, we'll prove the forward direction of the unit part.  Suppose with and . Suppose is a unit in .    Write down what it means for to be a unit in .    Recall from Module 3 that two equivalence classes are equal, , if and only if . Translate your statement above using this fact.    Find a linear combination of and that is equal to . What does this say about ? (Hint: Bezout's identity.)   "
},
{
  "id": "ws-rings-activity-6-1-1",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-1-1",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": " (Backward direction of the unit part.) Suppose with and . Suppose . Apply Bezout's identity and reduce modulo . How does this show is a unit in ?  "
},
{
  "id": "ws-rings-activity-6-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-1-2",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": "  (Forward direction of the zero divisor part.) Suppose with , and . Suppose is a zero divisor in .    Write down a careful definition of what it means for to be a zero divisor.    Suppose . Apply Bezout's identity, and multiply the result by . Conclude . Why is this a contradiction?   "
},
{
  "id": "ws-rings-activity-6-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": " (Finally: Backward direction of the zero divisor part.) Suppose with and with . Suppose . Let . Show that is an integer, and .  "
},
{
  "id": "ws-rings-activity-7-1",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-1",
  "type": "Worksheet Exercise",
  "number": "15",
  "title": "",
  "body": " Be careful - not everything has to be a unit or a zero divisor (or ). What are the units in ? What are the zero divisors in ? Are there elements that are neither units nor zero divisors?  "
},
{
  "id": "ws-rings-activity-7-2-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-2",
  "type": "Definition",
  "number": "97",
  "title": "",
  "body": " Let be a commutative ring. A polynomial in over  is an expression of the form where is a nonnegative integer and are elements of . The polynomial ring over  is the set of all polynomials over the ring , and is denoted .  "
},
{
  "id": "ws-rings-activity-7-2-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-3",
  "type": "Worksheet Exercise",
  "number": "16",
  "title": "",
  "body": " Is a commutative ring with identity? Is a commutative ring with identity? Is always, sometimes or never a commutative ring with identity?  "
},
{
  "id": "ws-rings-activity-7-2-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-7-2-4",
  "type": "Worksheet Exercise",
  "number": "17",
  "title": "",
  "body": " Let and be polynomials in . Find . Is always, sometimes, or never an integral domain?  "
},
{
  "id": "ws-rings-activity-9-1-2",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Let with , . Determine whether each of the following statements are true or false. Justify your answers. Not all of these are true!    If is a zero divisor, then is not a unit.    If is not a unit, then is a zero divisor.    If is a unit then is not a zero divisor.    If is not a zero divisor, then is a unit.   "
},
{
  "id": "ws-rings-activity-9-1-3",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Back to units and zero divisors in .  Consider . Since 16 and 24 are not relatively prime, it should follow that is a zero divisor in . Let's show is a zero divisor. Find . Show is a nonzero integer, and .  Generalize what you did in part (a) to , thus showing that if then is a zero divisor in .  Now, assume is a unit. Let's show . Since is a unit, there exists such that . This can be rewritten as . This means and are equal as congruence classes.  First, recall this Lemma from Module 3:    Apply the Lemma (here is congruence modulo ), and then work with what you get to show that there's a linear combination of and equal to . Then conclude that .  "
},
{
  "id": "ws-rings-activity-9-1-4",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a ring. Suppose that due to a printer error, the addition and multiplication tables for were printed with several missing entries, as shown below:     +                                                                                                      Using only the ring axioms, complete the tables. Explain how each entry you add can be determined from the ring axioms and the entries already completed. (Hints: Some important ring axioms are addition being commutative, and the distributive property. Recall Weekly Practice from Module 1 #3. Also, you can use Proof Portfolio Problem 6a, which is true in rings (not just fields). Note 5b is not true for all rings.)    "
},
{
  "id": "ws-rings-activity-9-1-5",
  "level": "2",
  "url": "ws-rings-activity.html#ws-rings-activity-9-1-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " For which is an integral domain? A field?  "
},
{
  "id": "portfolios-2",
  "level": "1",
  "url": "portfolios-2.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 1, 2, and 3",
  "body": " Portfolio Problems 1, 2, and 3   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without saying commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .    Are additive identities unique?  One of the field axioms is that a field has an additive identity. That is, there exists an element such that . In math we care about the difference between an and the . If we say there’s an additive identity, then we’re not excluding the possibility of there being more than one. Whereas when we say the , we mean there’s exactly one.  So, can we refer to the additive identity of a field? That is, are additive identities unique? Prove (using definitions and field axioms) or disprove.  Note: If you prove, you should state your result as a theorem. One phrasing of the theorem could be Let be a field and suppose that and are both additive identities for . Then .    Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for one, prove your other two answers.)  and .  and .  and .   "
},
{
  "id": "portfolios-2-3",
  "level": "2",
  "url": "portfolios-2.html#portfolios-2-3",
  "type": "Portfolio Problem",
  "number": "1",
  "title": "Additive and Multiplicative Cancellation.",
  "body": " Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without saying commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .  "
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
  "body": " Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for one, prove your other two answers.)  and .  and .  and .  "
},
{
  "id": "portfolios-3",
  "level": "1",
  "url": "portfolios-3.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 4, 5, and 6",
  "body": " Portfolio Problems 4, 5, and 6   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook. You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should expand on every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.    Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!     Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).    "
},
{
  "id": "portfolios-3-3",
  "level": "2",
  "url": "portfolios-3.html#portfolios-3-3",
  "type": "Portfolio Problem",
  "number": "4",
  "title": "Proving the division algorithm.",
  "body": " Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook. You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should expand on every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.  "
},
{
  "id": "portfolios-3-4",
  "level": "2",
  "url": "portfolios-3.html#portfolios-3-4",
  "type": "Portfolio Problem",
  "number": "5",
  "title": "Well-defined operations.",
  "body": " Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!   "
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
  "body": " Portfolio Problems 7, 8, and 9   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Let with . Let and choose . Prove:  is a unit if and only if .  with is a zero divisor if and only if .    Let . This problem is about the power set of with addition and multiplication as defined in Definition 3.6 of your text or the first page of the Module 7 worksheet.  Prove that is the additive identity of .  Prove that every element of has an additive inverse.  Prove that is the multiplicative identity in .  Make a conjecture of the form is a unit if and only if is... and describe how you came up with this conjecture.  Prove the statement you made in the previous problem.    Prove that every field is an integral domain by proving this lemma: In a ring , if is a unit then is not a zero divisor. Use ring axioms.   "
},
{
  "id": "portfolios-4-3",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-3",
  "type": "Portfolio Problem",
  "number": "7",
  "title": "",
  "body": " Let with . Let and choose . Prove:  is a unit if and only if .  with is a zero divisor if and only if .  "
},
{
  "id": "portfolios-4-4",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-4",
  "type": "Portfolio Problem",
  "number": "8",
  "title": "",
  "body": " Let . This problem is about the power set of with addition and multiplication as defined in Definition 3.6 of your text or the first page of the Module 7 worksheet.  Prove that is the additive identity of .  Prove that every element of has an additive inverse.  Prove that is the multiplicative identity in .  Make a conjecture of the form is a unit if and only if is... and describe how you came up with this conjecture.  Prove the statement you made in the previous problem.  "
},
{
  "id": "portfolios-4-5",
  "level": "2",
  "url": "portfolios-4.html#portfolios-4-5",
  "type": "Portfolio Problem",
  "number": "9",
  "title": "",
  "body": " Prove that every field is an integral domain by proving this lemma: In a ring , if is a unit then is not a zero divisor. Use ring axioms.  "
},
{
  "id": "portfolios-5",
  "level": "1",
  "url": "portfolios-5.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problems 10, 11, and 12",
  "body": " Portfolio Problems 10, 11, and 12   This is the last problem set! Remember that you need to complete 10 out of 12 problems for your portfolio.  Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.     We won’t explicitly cover this definition in class, this problem can be done any time! Please ask me if you need help (instead of asking AI!) There are also hints (commented out) in the Overleaf document.  Let be a ring and let . The centralizer of is defined to be the set of all such that . We write for the centralizer of .   Find two elements of the centralizer of in .  Prove that is a subring of . (Use the subring test from Module 8!)  Is the centralizer of necessarily commutative?    (Can be done after Module 9.) Recall that an invariant of a ring isomorphism is a property that is shared by rings that are isomorphic. That is, if is isomorphic to and satisfies some property (like having identity), then must have the same property.  Prove the following: Let and be rings, and let be an isomorphism. If has identity, say , then also has identity. Specifically, is an identity for . (Note, this proof is on page 109 in Activity 7.14, as usual you must fill in the missing details and expand on the ? s.)  Use part (a) to show that is not isomorphic to .  Prove that if and are isomorphic rings and is commutative then is commutative.  Use part (c) to show that and are not isomorphic.   Let be a ring. For any integer and any we define The characteristic of , denoted char( ), is the smallest positive integer such that for all . If no such integer exists, then is said to have characteristic zero . Find the characteristic of . Prove your answer. (You might take inspiration from the proof of Theorem 5.12 on p. 79 of your textbook.)  "
},
{
  "id": "portfolios-5-3",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-3",
  "type": "Portfolio Problem",
  "number": "10",
  "title": "",
  "body": "  We won’t explicitly cover this definition in class, this problem can be done any time! Please ask me if you need help (instead of asking AI!) There are also hints (commented out) in the Overleaf document.  Let be a ring and let . The centralizer of is defined to be the set of all such that . We write for the centralizer of .   Find two elements of the centralizer of in .  Prove that is a subring of . (Use the subring test from Module 8!)  Is the centralizer of necessarily commutative?  "
},
{
  "id": "portfolios-5-4",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-4",
  "type": "Portfolio Problem",
  "number": "11",
  "title": "",
  "body": " (Can be done after Module 9.) Recall that an invariant of a ring isomorphism is a property that is shared by rings that are isomorphic. That is, if is isomorphic to and satisfies some property (like having identity), then must have the same property.  Prove the following: Let and be rings, and let be an isomorphism. If has identity, say , then also has identity. Specifically, is an identity for . (Note, this proof is on page 109 in Activity 7.14, as usual you must fill in the missing details and expand on the ? s.)  Use part (a) to show that is not isomorphic to .  Prove that if and are isomorphic rings and is commutative then is commutative.  Use part (c) to show that and are not isomorphic.  "
},
{
  "id": "portfolios-5-5",
  "level": "2",
  "url": "portfolios-5.html#portfolios-5-5",
  "type": "Portfolio Problem",
  "number": "12",
  "title": "",
  "body": "Let be a ring. For any integer and any we define The characteristic of , denoted char( ), is the smallest positive integer such that for all . If no such integer exists, then is said to have characteristic zero . Find the characteristic of . Prove your answer. (You might take inspiration from the proof of Theorem 5.12 on p. 79 of your textbook.) "
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
