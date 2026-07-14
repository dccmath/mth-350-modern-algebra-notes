var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ws-fields-activity",
  "level": "1",
  "url": "ws-fields-activity.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Fields",
  "body": " Fields  The Good Place    Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of natural numbers is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of complex numbers is     The set of  matrices with real entries is            Binary Operations  Our English word algebra comes from the Arabic word al-jabr, which means the reunion of broken parts . It is not surprising, then, that we will be considering ways of combining two elements of a set into one; to do this, we turn to a particular type of function, known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that we say that is closed under the operation .      Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .     Fields  A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all and .     Addition and multiplication are associative , meaning that for all , , and .     Addition and multiplication are commutative , that is, for all , and .     The set contains an additive identity . That is, there exists an element such that .     The set contains a multiplicative identity . That is, there exists an element such that for all , .     Every element of has an additive inverse within  , meaning that for every , there exists a such that .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .          For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?       Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you add like terms , in multiplication you need to use the distributive property).    Which of the properties of a field do polynomials have?      Other Operations   Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?       Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)   Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for rectangle multiplication .   Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!       Summarize   Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                                 Review questions  What are the sets and ?   What is a binary operation? And what does it mean for a binary operation to be closed?  What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?  Why do you think DocK called fields The Good Place ?  The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 1   A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?     Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.    Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!       "
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
  "number": "1.1",
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
  "number": "1.1",
  "title": "",
  "body": "  For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?   "
},
{
  "id": "ws-fields-activity-6-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Which of the properties of a field do polynomials have?   "
},
{
  "id": "ws-fields-activity-6-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-6-2-2",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": " Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?  "
},
{
  "id": "ws-rectangle-math-1-6",
  "level": "2",
  "url": "ws-fields-activity.html#ws-rectangle-math-1-6",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": " Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!  "
},
{
  "id": "sec-fields-review-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#sec-fields-review-1-2",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": " Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                            "
},
{
  "id": "ws-fields-activity-9-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-2",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "What are the sets and ?  "
},
{
  "id": "ws-fields-activity-9-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-3",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "What is a binary operation? And what does it mean for a binary operation to be closed? "
},
{
  "id": "ws-fields-activity-9-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-4",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing? "
},
{
  "id": "ws-fields-activity-9-1-5",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-5",
  "type": "Worksheet Exercise",
  "number": "1.9",
  "title": "",
  "body": "Why do you think DocK called fields The Good Place ? "
},
{
  "id": "ws-fields-activity-10-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "A field of ordered pairs?",
  "body": " A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?   "
},
{
  "id": "ws-fields-activity-10-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "Playing with distribution.",
  "body": " Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.  "
},
{
  "id": "ws-fields-activity-10-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-10-1-4",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "Messing with zero.",
  "body": " Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!    "
},
{
  "id": "ws-divisibility-activity",
  "level": "1",
  "url": "ws-divisibility-activity.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Divisibility of Integers, Division Algorithm, Integer Congruence",
  "body": " Divisibility of Integers, Division Algorithm, Integer Congruence  The Leftovers    The Integers  We'll assume the following about the integers as axioms . We don't prove axioms, we use them as building blocks to prove them. They give us a floor to stand on. Otherwise it's turtles all the way down.   Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .       Which axioms of a field are the integers missing?      Divides    An integer  divides an integer , denoted , if there exists an integer such that .    In a popular high school mathematics textbook, students are told that one of the theorems in number theory is the following:   If and are integers where is a factor of and is a factor of , then is a factor of .     Prove . It may help to translate this to use the word divides .      Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.        The Division Algorithm   The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .      Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.      What is different about applying the division algorithm when ?      Do you think we should we assume the division algorithm as an axiom or try to prove it?      Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?        More Division Algorithm    If prove that . (Use the definition of the set .) If , is ?       We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .     At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?      Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)     You've reached a contradiction, how?     What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!        Congruence    Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .    Examples: Here's a chance to remember congruences:    Give an example of two integers that are congruent modulo , where one is positive and one is negative.      Characterize all the integers such that . What are all the integers such that ?      Prove that, for all and , if and then .      Prove that for all and , if and then .        Fun with Congruence (and a connection to fields)    Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?       Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!         My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?        Review questions  Make sure you can answer the following questions:  What is the definition of divides ? Does where ? Does where .  State the division algorithm and apply to any pair of integers satisfying the hypothesis.  State the definition of and be able to determine if any pair of integers and are congruent modulo .  The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 2   Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?    Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by .     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.    UPCs!  Find a product with a UPC and verify the check digit.    Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has 2 solutions.     "
},
{
  "id": "ws-divisibility-activity-3-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-3-1-3",
  "type": "Axiom",
  "number": "2.1",
  "title": "Axioms of Integer Arithmetic.",
  "body": " Axioms of Integer Arithmetic     The integers are closed under addition and multiplication , meaning that for all integers and , both and are also integers.  Addition and multiplication are commutative , meaning that for all integers and , and .  Addition and multiplication are associative , meaning that for all integers and , and  Multiplication distributes over addition , meaning that for all integers and .  The integer 0 is an additive identity , meaning that for every integer .  The integer 1 is a multiplicative identity , meaning that for every integer .  Every integer has an additive inverse , typically denoted ; in particular, for every integer .     "
},
{
  "id": "ws-divisibility-activity-4-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-2",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": "  An integer  divides an integer , denoted , if there exists an integer such that .   "
},
{
  "id": "divides-div-thm",
  "level": "2",
  "url": "ws-divisibility-activity.html#divides-div-thm",
  "type": "Theorem",
  "number": "2.3",
  "title": "",
  "body": " If and are integers where is a factor of and is a factor of , then is a factor of .  "
},
{
  "id": "ws-divisibility-activity-4-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-5",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Prove . It may help to translate this to use the word divides .   "
},
{
  "id": "ws-divisibility-activity-4-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-4-1-6",
  "type": "Worksheet Exercise",
  "number": "2.2",
  "title": "",
  "body": "  Students are then asked about generalizing the theorem to:  If and are integers where is a factor of and is a factor of , then is a factor of for all integers and .  Is this true? Prove or disprove.   "
},
{
  "id": "ws-divisibility-activity-5-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-2",
  "type": "Theorem",
  "number": "2.7",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let and be integers with . Then there exist unique integers and such that   We call the quotient and the remainder .   "
},
{
  "id": "ws-divisibility-activity-5-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "2.3",
  "title": "",
  "body": "  Practice one more time: Come up with two integers and that satisfy the hypothesis of the division algorithm. (If you want a challenge, throw in a negative integer.) Trade these numbers with another group member and then apply the division algorithm to the numbers you receive.   "
},
{
  "id": "ws-divisibility-activity-5-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-4",
  "type": "Worksheet Exercise",
  "number": "2.4",
  "title": "",
  "body": "  What is different about applying the division algorithm when ?   "
},
{
  "id": "ws-divisibility-activity-5-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-5",
  "type": "Worksheet Exercise",
  "number": "2.5",
  "title": "",
  "body": "  Do you think we should we assume the division algorithm as an axiom or try to prove it?   "
},
{
  "id": "ws-divisibility-activity-5-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-5-1-6",
  "type": "Worksheet Exercise",
  "number": "2.6",
  "title": "",
  "body": "  Spoiler alert: We will prove it, since it turns out we can derive it from another, simpler axiom. To start, let's do an example. Let and . Consider Find some elements of and what appears to be the least element of ?   "
},
{
  "id": "ws-divisibility-activity-6-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-2",
  "type": "Worksheet Exercise",
  "number": "2.7",
  "title": "",
  "body": "  If prove that . (Use the definition of the set .) If , is ?    "
},
{
  "id": "ws-divisibility-activity-6-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-3",
  "type": "Worksheet Exercise",
  "number": "2.8",
  "title": "",
  "body": "  We will take the following as an axiom:   The Well-Ordering Principle  Every nonempty subset of the whole numbers contains a least element.   Do you think as defined earlier is always a nonempty subset of the whole numbers? What element can you be sure is in if ?   Choose and show that and so .  "
},
{
  "id": "ws-divisibility-activity-6-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-4",
  "type": "Worksheet Exercise",
  "number": "2.9",
  "title": "",
  "body": "  At this point you are hopefully thinking that is a nonempty subset of the whole numbers. So, we can apply the well-ordering principle and get a least element. We will show the least element is the remainder. So, let be the least element of . Since , we know there is an integer such that . Thus . That's good news! We also need that . Why do we know ?   "
},
{
  "id": "ws-divisibility-activity-6-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-5",
  "type": "Worksheet Exercise",
  "number": "2.10",
  "title": "",
  "body": "  Now let's show . Suppose, for the sake of a contradiction that . Show . (Recall and .)   "
},
{
  "id": "ws-divisibility-activity-6-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-6",
  "type": "Worksheet Exercise",
  "number": "2.11",
  "title": "",
  "body": " You've reached a contradiction, how?  "
},
{
  "id": "ws-divisibility-activity-6-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-6-1-7",
  "type": "Worksheet Exercise",
  "number": "2.12",
  "title": "",
  "body": "  What remains to be proven to show the division algorithm is that and is unique. You can find a partial proof near the end of Investigation 1, which will help you on your first problem set!   "
},
{
  "id": "ws-divisibility-activity-7-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-2",
  "type": "Definition",
  "number": "2.19",
  "title": "",
  "body": "  Let be a natural number, and let and be integers. Then  is congruent to modulo denoted provided that divides .   "
},
{
  "id": "ws-divisibility-activity-7-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-4",
  "type": "Worksheet Exercise",
  "number": "2.13",
  "title": "",
  "body": "  Give an example of two integers that are congruent modulo , where one is positive and one is negative.   "
},
{
  "id": "ws-divisibility-activity-7-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-5",
  "type": "Worksheet Exercise",
  "number": "2.14",
  "title": "",
  "body": "  Characterize all the integers such that . What are all the integers such that ?   "
},
{
  "id": "ws-divisibility-activity-7-1-6",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-6",
  "type": "Worksheet Exercise",
  "number": "2.15",
  "title": "",
  "body": "  Prove that, for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-7-1-7",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-7-1-7",
  "type": "Worksheet Exercise",
  "number": "2.16",
  "title": "",
  "body": "  Prove that for all and , if and then .   "
},
{
  "id": "ws-divisibility-activity-8-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-2",
  "type": "Worksheet Exercise",
  "number": "2.17",
  "title": "",
  "body": "  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Will this be a field?   "
},
{
  "id": "ws-divisibility-activity-8-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-3",
  "type": "Worksheet Exercise",
  "number": "2.18",
  "title": "",
  "body": "   Check digits: A UPC is a Universal Product Code, or the barcode on products. UPCs consist of 12 digits, and the last digit is known as a check digit. A check digit is there for error detection when a code is entered (they do this with your routing numbers for banks too). If the first 11 digits are , the check digit will be  where is the dot product, so multiply the entries in the same place, and then add up all the results. Verify that the check digit is correct on the box of Famous Amos cookies. Do the multiplication in your head using modular arithmetic!      "
},
{
  "id": "ws-divisibility-activity-8-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-8-1-4",
  "type": "Worksheet Exercise",
  "number": "2.19",
  "title": "",
  "body": "  My birthday was on a Thursday this year. Determine the next time my birthday will be on a Thursday again. (Use modular arithmetic! Also, leap years happen every 4 years, in years congruent to mod .) When will my birthday next be on a Sunday?   "
},
{
  "id": "ws-divisibility-activity-9-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-9-1-3",
  "type": "Worksheet Exercise",
  "number": "2.20",
  "title": "",
  "body": "What is the definition of divides ? Does where ? Does where . "
},
{
  "id": "ws-divisibility-activity-9-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-9-1-4",
  "type": "Worksheet Exercise",
  "number": "2.21",
  "title": "",
  "body": "State the division algorithm and apply to any pair of integers satisfying the hypothesis. "
},
{
  "id": "ws-divisibility-activity-9-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-9-1-5",
  "type": "Worksheet Exercise",
  "number": "2.22",
  "title": "",
  "body": "State the definition of and be able to determine if any pair of integers and are congruent modulo . "
},
{
  "id": "ws-divisibility-activity-10-1-2",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "Fun (?) with fields (?).",
  "body": " Fun (?) with fields (?)  Consider the set and define addition by and multiplication by . Find the multiplicative and additive identities of this number system (if they exist), and find the additive and multiplicative inverses of each element (if they exist). Is this set a field?  "
},
{
  "id": "ws-divisibility-activity-10-1-3",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "2.2",
  "title": "Another way to talk about congruences.",
  "body": " Another way to talk about congruences  Consider the following theorem:    Let be a natural number, and let and be integers. Then if and only if and yield the same remainder when divided by .     Do a couple examples of the theorem (in both directions!) below to gain a better understanding of what the theorem says.  Prove (at least) one direction of the theorem.  "
},
{
  "id": "ws-divisibility-activity-10-1-4",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-4",
  "type": "Worksheet Exercise",
  "number": "2.3",
  "title": "UPCs!",
  "body": " UPCs!  Find a product with a UPC and verify the check digit.  "
},
{
  "id": "ws-divisibility-activity-10-1-5",
  "level": "2",
  "url": "ws-divisibility-activity.html#ws-divisibility-activity-10-1-5",
  "type": "Worksheet Exercise",
  "number": "2.4",
  "title": "Another way congruences are weird.",
  "body": " Another way congruences are weird  In high school algebra, linear equations, like always had one solution. Consider the set and define addition by and multiplication by .  Show that in the equation has no solutions.  Find a linear equation in the number system that has 2 solutions.  "
},
{
  "id": "ws-equivalence-zn-activity",
  "level": "1",
  "url": "ws-equivalence-zn-activity.html",
  "type": "Worksheet",
  "number": "3",
  "title": "Equivalence Relations, Equivalence Classes, and <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span>",
  "body": " Equivalence Relations, Equivalence Classes, and  A Strange New World    Equivalence Relations   Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .        Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .          Reflexive  Symmetric  Transitive    1.          2.          3.          4.          5.                Equivalence Classes    Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,      Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in 1. on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in 5. on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in on the previous page? What about ? How is this different than what happened in previous questions?        Some Properties of Equivalence Classes  The reason we define an equivalence relation to have the properties reflexive, symmetric, and transitive is that it leads to equivalence classes that have some special properties.    We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of two elements of , say and for which congruence classes modulo that are equal. Is where is congruence modulo ? Then give an example for which , is ?    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?     Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes correspond to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?          The Number System  For our purposes, the most important equivalence relation will be congruence modulo . This allows us to define the number system using the For every integer , the  integers modulo   denoted , is the set of the distinct congruence classes of modulo , i.e.,   We can make into a number system by defining an addition and multiplication on the set:   Addition:     Multiplication:    This may seem like a silly thing to do, but remember that is actually an infinite set! In fact, the two 's actually, in a sense, have a different meaning. The one on the left is saying add these infinite sets and the one on the right is saying add these two integers .  Let's consider . And let's find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out no. Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .    Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                                    Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Which is this table for?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a filed do these have?      Review questions  What is an equivalence relation? What does it mean to be reflexive, symmetric, and transitive?  What is an equivalence class? What is a congruence class?  How do we add and multiply congruence classes?  The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 3   Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .    When is a field?  Based on your work for this module, do you have a conjecture for when is a field? State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.    Multiplicative cancellation  One of the things our high school teachers told us about is multiplicative cancellation (although they probably didn't use those words). As an example, if we have we could cancel the 's so that we have . But in high school we were almost always working in . This question asks about multiplicative cancellation work in .  The statement at the start isn't quite precise enough. There's one value for which the multiplicative cancellation doesn't work, can you find it?  Consider . For with , if does ? (Hint: Look at your multiplication table for !)  Consider . For with , if does ?  You should have gotten two different answers for (a) and (b). What's different about 11 vs. 12?  What if I told you is a field? What axioms might you use to prove part (c) is true?     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-2",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": " Let be a set and let be a binary relation on . Then is called an equivalence relation on provided that satisfies all of the following properties:  Reflexive: For all , .  Symmetric: For all , if then .  Transitive: For all , if and then .     "
},
{
  "id": "ws-equivalence-zn-activity-3-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-3",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "",
  "body": "  Which of the properties of reflexive, symmetric, and transitive are satisfied by each of the following relations on the given set ? Sketch a proof or a counterexample to justify each of your answers.     Number of digits relation: Let and consider the relation defined by if and only if has the same number of digits as .     Divides relation: Let and consider the relation defined by if and only if .     Sum to 10 relation: Let and consider the relation defined by if and only if .     Rhyming relation: Let be the set of all words in the English language and for words and say if and only if rhymes with .     Fraction relation: Let and for define if and only if .   "
},
{
  "id": "ws-equivalence-zn-activity-3-1-4-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-3-1-4-1",
  "type": "Table",
  "number": "3.3",
  "title": "",
  "body": "     Reflexive  Symmetric  Transitive    1.          2.          3.          4.          5.          "
},
{
  "id": "ws-equivalence-zn-activity-4-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-2",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": "  Let be an equivalence relation on a nonempty set , and let . The equivalence class of  (with respect to ) denoted is the set of all elements of that are related to by . More precisely,    "
},
{
  "id": "ws-equivalence-zn-activity-4-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-4-1-3",
  "type": "Worksheet Exercise",
  "number": "3.2",
  "title": "",
  "body": " Let's find some equivalence classes.   Find all distinct equivalence classes for the equivalence relation defined in 1. on the previous page. Note equivalence classes are sets so use set notation!    A student claims is an equivalence class for the equivalence relation given in 5. on the previous page. Are they correct? Can you find (another) equivalence class for that relation?    In the module prep you hopefully convinced yourself the relation on defined by if and only if is an equivalence relation. Find all distinct equivalence classes of . (These are called congruence classes .) How many distinct equivalence classes do you think you will get if you replace with ?    We only define equivalence classes for equivalence relations. This question is to think about why we might do that. What do you get when you find equivalence class for in the relation defined in on the previous page? What about ? How is this different than what happened in previous questions?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "3.3",
  "title": "",
  "body": "  We'll start by considering the following lemma.   Let be a nonempty set and let be an equivalence relation on . Then for all , if and only if .       Let's see what this lemma means about congruence classes, that is, equivalence classes under the equivalence relation congruence modulo . Give an example of two elements of , say and for which congruence classes modulo that are equal. Is where is congruence modulo ? Then give an example for which , is ?    This Lemma means for a given equivalence class there are many different ways to write it, we call this picking a representative . Which representatives might make sense to use for the congruence classes modulo ?   "
},
{
  "id": "ws-equivalence-zn-activity-5-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-5-1-4",
  "type": "Worksheet Exercise",
  "number": "3.4",
  "title": "",
  "body": " Now let's consider the following theorem.   Let be a nonempty set and let be an equivalence relation on . Then can be written as the disjoint union of distinct equivalence classes correspond to . That is,   For all , if then .    For all , .    For all , if for some , then .        Caption this picture. In particular, can you see see parts a,b, and c of the theorem in the picture?     "
},
{
  "id": "ws-equivalence-zn-activity-6-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-4",
  "type": "Example",
  "number": "3.10",
  "title": "",
  "body": "Let's consider . And let's find . We are really finding: which is kind of a crazy thing to think about. Using the definition of addition above this is But appears to not be in . Is not closed? Turns out no. Recall that . They are the same sets! So we'll say In our addition and multiplication tables, we'll write this reduced answer. That is, if we get a congruence class that appears to not be in the set, we will choose a representative that is between and .  "
},
{
  "id": "ws-equivalence-zn-activity-6-1-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-6-1-5",
  "type": "Worksheet Exercise",
  "number": "3.5",
  "title": "",
  "body": " Complete the following addition and multiplication tables for . (We can skip writing the subscripts, as long as you remember it's modulo !)     +                                                              [1]                                                                              "
},
{
  "id": "ws-equivalence-zn-activity-7-1-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-7-1-1",
  "type": "Worksheet Exercise",
  "number": "3.6",
  "title": "",
  "body": " Fill in the addition and multiplication tables on this page and the next.  These tables have all the elements of . The and are for addition and multiplication as defined on the previous page! You need not write the brackets, but make sure you are picking a representative between 0 and 10. Note - Google sheets will do mod for you (use a formula like =MOD(9*8,11)).  "
},
{
  "id": "ws-equivalence-zn-activity-8-1-1",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-1-1",
  "type": "Worksheet Exercise",
  "number": "3.7",
  "title": "",
  "body": "Which is this table for? "
},
{
  "id": "ws-equivalence-zn-activity-8-1-5",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-8-1-5",
  "type": "Worksheet Exercise",
  "number": "3.8",
  "title": "",
  "body": "Make as many observations as possible about the tables you have made. What do you notice? What do you wonder? What patterns do you see? In what ways are these like the integers? In what ways are they not? What properties of a filed do these have? "
},
{
  "id": "ws-equivalence-zn-activity-9-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-9-1-2",
  "type": "Worksheet Exercise",
  "number": "3.9",
  "title": "",
  "body": "What is an equivalence relation? What does it mean to be reflexive, symmetric, and transitive? "
},
{
  "id": "ws-equivalence-zn-activity-9-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-9-1-3",
  "type": "Worksheet Exercise",
  "number": "3.10",
  "title": "",
  "body": "What is an equivalence class? What is a congruence class? "
},
{
  "id": "ws-equivalence-zn-activity-9-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-9-1-4",
  "type": "Worksheet Exercise",
  "number": "3.11",
  "title": "",
  "body": "How do we add and multiply congruence classes? "
},
{
  "id": "ws-equivalence-zn-activity-10-1-2",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-2",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "Fractions and relations.",
  "body": " Fractions and relations  We can define a relation on such that if and only if .  Give 3 examples of pairs that are related.  Is this an equivalence relation? Prove or disprove for each of reflexive, symmetric, and transitive.  Find .  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-3",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-3",
  "type": "Worksheet Exercise",
  "number": "3.2",
  "title": "When is <span class=\"process-math\">\\(\\mathbb{Z}_n\\)<\/span> a field?",
  "body": " When is a field?  Based on your work for this module, do you have a conjecture for when is a field? State your conjecture as is a field if and only if ... . Then, build addition and multiplication tables for two more values of to test out your conjecture.  "
},
{
  "id": "ws-equivalence-zn-activity-10-1-4",
  "level": "2",
  "url": "ws-equivalence-zn-activity.html#ws-equivalence-zn-activity-10-1-4",
  "type": "Worksheet Exercise",
  "number": "3.3",
  "title": "Multiplicative cancellation.",
  "body": " Multiplicative cancellation  One of the things our high school teachers told us about is multiplicative cancellation (although they probably didn't use those words). As an example, if we have we could cancel the 's so that we have . But in high school we were almost always working in . This question asks about multiplicative cancellation work in .  The statement at the start isn't quite precise enough. There's one value for which the multiplicative cancellation doesn't work, can you find it?  Consider . For with , if does ? (Hint: Look at your multiplication table for !)  Consider . For with , if does ?  You should have gotten two different answers for (a) and (b). What's different about 11 vs. 12?  What if I told you is a field? What axioms might you use to prove part (c) is true?  "
},
{
  "id": "sec-portfolio-problems-2",
  "level": "1",
  "url": "sec-portfolio-problems-2.html",
  "type": "Section",
  "number": "1.1",
  "title": "Portfolio Problems 1, 2, and 3",
  "body": " Portfolio Problems 1, 2, and 3   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without saying commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .    Are additive identities unique?  One of the field axioms is that a field has an additive identity. That is, there exists an element such that . In math we care about the difference between an and the . If we say there’s an additive identity, then we’re not excluding the possibility of there being more than one. Whereas when we say the , we mean there’s exactly one.  So, can we refer to the additive identity of a field? That is, are additive identities unique? Prove (using definitions and field axioms) or disprove.  Note: If you prove, you should state your result as a theorem. One phrasing of the theorem could be Let be a field and suppose that and are both additive identities for . Then .    Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for one, prove your other two answers.)  and .  and .  and .   "
},
{
  "id": "sec-portfolio-problems-2-3",
  "level": "2",
  "url": "sec-portfolio-problems-2.html#sec-portfolio-problems-2-3",
  "type": "Portfolio Problem",
  "number": "1",
  "title": "Additive and Multiplicative Cancellation.",
  "body": " Additive and Multiplicative Cancellation  In this problem you should use only the axioms of fields, and should do so explicitly. E.g., you can’t just switch to without saying commutative property of multiplication!  Prove that in a field, additive cancellation holds. That is, prove that if is a field, , and , then .  Prove that in a field, multiplicative cancellation holds. That is, if is a field, , , and , then .  "
},
{
  "id": "sec-portfolio-problems-2-4",
  "level": "2",
  "url": "sec-portfolio-problems-2.html#sec-portfolio-problems-2-4",
  "type": "Portfolio Problem",
  "number": "2",
  "title": "Are additive identities unique?",
  "body": " Are additive identities unique?  One of the field axioms is that a field has an additive identity. That is, there exists an element such that . In math we care about the difference between an and the . If we say there’s an additive identity, then we’re not excluding the possibility of there being more than one. Whereas when we say the , we mean there’s exactly one.  So, can we refer to the additive identity of a field? That is, are additive identities unique? Prove (using definitions and field axioms) or disprove.  Note: If you prove, you should state your result as a theorem. One phrasing of the theorem could be Let be a field and suppose that and are both additive identities for . Then .  "
},
{
  "id": "sec-portfolio-problems-2-5",
  "level": "2",
  "url": "sec-portfolio-problems-2.html#sec-portfolio-problems-2-5",
  "type": "Portfolio Problem",
  "number": "3",
  "title": "Practice with division.",
  "body": " Practice with division  Let , , and be integers. What conclusions, if any, can be drawn from the following situations? (You can say no conclusions for one, prove your other two answers.)  and .  and .  and .  "
},
{
  "id": "sec-portfolio-problems-3",
  "level": "1",
  "url": "sec-portfolio-problems-3.html",
  "type": "Section",
  "number": "1.2",
  "title": "Portfolio Problems 4, 5, and 6",
  "body": " Portfolio Problems 4, 5, and 6   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook. You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should expand on every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.    Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!     Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).    "
},
{
  "id": "sec-portfolio-problems-3-3",
  "level": "2",
  "url": "sec-portfolio-problems-3.html#sec-portfolio-problems-3-3",
  "type": "Portfolio Problem",
  "number": "4",
  "title": "Proving the division algorithm.",
  "body": " Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook. You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should expand on every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.  "
},
{
  "id": "sec-portfolio-problems-3-4",
  "level": "2",
  "url": "sec-portfolio-problems-3.html#sec-portfolio-problems-3-4",
  "type": "Portfolio Problem",
  "number": "5",
  "title": "Well-defined operations.",
  "body": " Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined? Explain very clearly and refer to your work in the previous part.   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!   "
},
{
  "id": "sec-portfolio-problems-3-5",
  "level": "2",
  "url": "sec-portfolio-problems-3.html#sec-portfolio-problems-3-5",
  "type": "Portfolio Problem",
  "number": "6",
  "title": "Greatest common divisors.",
  "body": " Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).   "
},
{
  "id": "sec-portfolio-problems-4",
  "level": "1",
  "url": "sec-portfolio-problems-4.html",
  "type": "Section",
  "number": "1.3",
  "title": "Portfolio Problems 7, 8, and 9",
  "body": " Portfolio Problems 7, 8, and 9   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.   "
},
{
  "id": "sec-portfolio-problems-5",
  "level": "1",
  "url": "sec-portfolio-problems-5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Portfolio Problems 10, 11, and 12",
  "body": " Portfolio Problems 10, 11, and 12   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
