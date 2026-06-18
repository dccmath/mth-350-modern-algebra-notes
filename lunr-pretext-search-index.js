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
  "number": "1.1",
  "title": "Fields",
  "body": " Fields    Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of natural numbers is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of complex numbers is     The set of  matrices with real entries is            Binary Operations  Our English word algebra comes from the Arabic word al-jabr, which means the reunion of broken parts . It is not surprising, then, that we will be considering ways of combining two elements of a set into one; to do this, we turn to a particular type of function, known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that we say that is closed under the operation .      Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .     Fields  A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all and .     Addition and multiplication are associative , meaning that for all , , and .     Addition and multiplication are commutative , that is, for all , and .     The set contains an additive identity . That is, there exists an element such that .     The set contains a multiplicative identity . That is, there exists an element such that for all , .     Every element of has an additive inverse within  , meaning that for every , there exists a such that .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .          For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?       Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you add like terms , in multiplication you need to use the distributive property).    Which of the properties of a field do polynomials have?      Other Operations   Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?       Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)   Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for rectangle multiplication .   Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!       Summarize   Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                                 Review questions  What are the sets and ?   What is a binary operation? And what does it mean for a binary operation to be closed?  What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?  Why do you think DocK called fields The Good Place ?  The rest of this page is for you to summarize important ideas from the module.      Weekly Practice 1   A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?     Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.    Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!       "
},
{
  "id": "ws-fields-activity-2-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers whole numbers integers rational numbers real numbers irrational numbers complex numbers  matrices with real entries "
},
{
  "id": "ws-fields-activity-3-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3-1-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "Ordered pairs.",
  "body": " Ordered pairs  Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .  "
},
{
  "id": "ws-fields-activity-3-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "ws-fields-activity-4-1",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-4-1",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?   "
},
{
  "id": "ws-fields-activity-5-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-5-1-3",
  "type": "Worksheet Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Which of the properties of a field do polynomials have?   "
},
{
  "id": "ws-fields-activity-5-2-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-5-2-2",
  "type": "Worksheet Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?  "
},
{
  "id": "ws-rectangle-math-1-6",
  "level": "2",
  "url": "ws-fields-activity.html#ws-rectangle-math-1-6",
  "type": "Worksheet Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!  "
},
{
  "id": "sec-fields-review-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#sec-fields-review-1-2",
  "type": "Worksheet Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.                                         Closed under addition                          Closed under multiplication                          Addition associative                          Multiplication associative                          Addition commutative                          Multiplication commutative                          Additive identity                          Multiplicative identity                          Additive inverses                          Multiplicative inverses                          Multiplication distributes over addition                            "
},
{
  "id": "ws-fields-activity-8-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-8-1-2",
  "type": "Worksheet Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "What are the sets and ?  "
},
{
  "id": "ws-fields-activity-8-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-8-1-3",
  "type": "Worksheet Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "What is a binary operation? And what does it mean for a binary operation to be closed? "
},
{
  "id": "ws-fields-activity-8-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-8-1-4",
  "type": "Worksheet Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing? "
},
{
  "id": "ws-fields-activity-8-1-5",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-8-1-5",
  "type": "Worksheet Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "Why do you think DocK called fields The Good Place ? "
},
{
  "id": "ws-fields-activity-9-1-2",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-2",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "A field of ordered pairs?",
  "body": " A field of ordered pairs?  Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?   "
},
{
  "id": "ws-fields-activity-9-1-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-3",
  "type": "Worksheet Exercise",
  "number": "1.1.2",
  "title": "Playing with distribution.",
  "body": " Playing with distribution  It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .  What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)  In the integers does addition distribute over multiplication? Give a proof or a counterexample.  In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.  "
},
{
  "id": "ws-fields-activity-9-1-4",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-9-1-4",
  "type": "Worksheet Exercise",
  "number": "1.1.3",
  "title": "Messing with zero.",
  "body": " Messing with zero  You've known for a while that for any integer , .     How would you explain to an elementary schooler that ?    It turns out to be true in any field  that for any , , where is the additive identity.   Prove that for any field and any that using only the field properties.   Consider in two different ways. See me if\/when you get stuck!    "
},
{
  "id": "sec-portfolio-problems-2",
  "level": "1",
  "url": "sec-portfolio-problems-2.html",
  "type": "Section",
  "number": "2.1",
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
  "number": "2.2",
  "title": "Portfolio Problems 4, 5, and 6",
  "body": " Portfolio Problems 4, 5, and 6   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.    Proving the division algorithm  (Related to Module 2) Prove the following: Let and be integers with . Then there exist unique integers and such that:   Note: There's a complete proof of this starting on p. 14 in your textbook. You can (and should!) base your Portfolio Proof off of the one in your textbook. However, the textbook proof has a lot of ? in it. Your proof here should expand on every ? , plus anywhere else that you had to stop and think! If you aren't sure why there is a ? , that's an indication that you should think more and\/or come to an office hour with questions. Also take a look at what we did in Module 2 in class.    Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined?   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!     Greatest common divisors   (Related to Module 4)   Let and be integers, not both 0. Prove that if there exist such that , then .   Prove that for all nonzero integers , , and , if and only if and . (You’ll need to apply Bezout’s identity).    "
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
  "body": " Well-defined operations   (Related to Module 3) In class we mentioned that adding and multiplying elements of means we are adding\/multiplying infinite sets. This may seem very natural and may not concern you at all, but it will all be total nonsense if addition and multiplication in isn’t well-defined . This problem is to show you what can happen if an operation is not well-defined, and also prove that the addition and multiplication we’ve defined is well-defined.   Let be the operation on defined as Note that parity refers to whether an integer is even or odd. Thus, two integers have the same parity if they are both even or both odd. Likewise they have opposite parity if one is even and one is odd.  Use the above definition to compute , , , and .   What is the relationship between , , and in ? What is the relationship between , , and in ?   Let denote a binary operation on a set . Then is said to be well-defined provided that whenever and in we have . Is well-defined?   Prove addition and multiplication in as defined in class are well-defined. There’s a proof of addition on page 32 of your book, use that as an outline, but fill in more detail where there are question marks (and anywhere else you had to stop and think)!   "
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
  "number": "2.3",
  "title": "Portfolio Problems 7, 8, and 9",
  "body": " Portfolio Problems 7, 8, and 9   Read the guidelines on the problem portfolio information and the writing guidelines before starting. The only resources allowed are your notes, your textbook, your instructor, and your classmates. You are allowed to collaborate on these problem sets, please see the academic honesty document for how to collaborate appropriately.  You can submit 3 drafts per week, so there’s effectively unlimited attempts on any particular problem.  You’ll put all your final drafts of your problems in a portfolio template (select all and copy). You can start using that now for drafts, but please edit so that you only turn in the one appropriate problem under each assignment on Blackboard! Please start early and ask for help when you need it.   "
},
{
  "id": "sec-portfolio-problems-5",
  "level": "1",
  "url": "sec-portfolio-problems-5.html",
  "type": "Section",
  "number": "2.4",
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
