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
  "id": "mod-fields-3",
  "level": "1",
  "url": "mod-fields-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets of Numbers (and one set of matrices)",
  "body": " Sets of Numbers (and one set of matrices)  We'll start with some formalizing of things you have likely seen before:   The set of  natural numbers  is     The set of whole numbers is     The set of integers is all positive and negative natural numbers, as well as 0:     The set of rational numbers is     The set of real numbers , denoted is something you likely have an intuitive idea about. Defining rigorously is actually quite difficult, and can occupy a significant amount of time in a first course in real analysis. So we'll make use of your intuition in this class.    The set of irrational numbers is . That is, the set of real numbers that are not rational.    The set of  complex numbers  is     The set of  matrices with real entries is       "
},
{
  "id": "mod-fields-4",
  "level": "1",
  "url": "mod-fields-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Binary Operations",
  "body": " Binary Operations  Our English word algebra comes from the Arabic word al-jabr, which means the reunion of broken parts . It is not surprising, then, that we will be considering ways of combining two elements of a set into one; to do this, we turn to a particular type of function, known as a binary operation. Let be a nonempty set.   A function is called a binary operation on  . That is, the function takes two numbers in the set , and outputs another number, potentially in a different set . Given , we usually write in place of the typical function notation .    If is a binary operation on such that we say that is closed under the operation .      Example: Say . Let be the binary operation multiplication. Then, with the function notation, we could write , though we usually write . Since, whenever we have , we can say . Thus, is closed under the operation . However, is not closed under the binary operation because, for example, .  "
},
{
  "id": "ws-fields-activity",
  "level": "1",
  "url": "ws-fields-activity.html",
  "type": "Worksheet",
  "number": "1.3",
  "title": "Fields",
  "body": " Fields   A field is a set together with two binary operations, called addition ( ) and multiplication ( ), denoted as the triple , such that all of the following axioms hold:     The set is closed under addition and multiplication , meaning that for all and .     Addition and multiplication are associative , meaning that for all , , and .     Addition and multiplication are commutative , that is, for all , and .     The set contains an additive identity . That is, there exists an element such that .     The set contains a multiplicative identity . That is, there exists an element such that for all , .     Every element of has an additive inverse within  , meaning that for every , there exists a such that .     Every nonzero (i.e., not ) element of has a multiplicative inverse within  , meaning that for every , there exists a such that .     Multiplication distributes over addition , meaning that, for all , .        For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?    Here is some stuff after the exercise, and some more stuff... generally going on for a long time to see if the workspace of 1 inch actually works or not. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste. Copy-paste.  "
},
{
  "id": "ws-fields-activity-2-1",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "ws-fields-activity-3",
  "level": "2",
  "url": "ws-fields-activity.html#ws-fields-activity-3",
  "type": "Worksheet Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  For one of the sets on page 1, determine which of the 8 properties of a field it has and which it doesn't (assume the addition and multiplication you've been taught in the past for each set). Is the set a field?   "
},
{
  "id": "mod-fields-6",
  "level": "1",
  "url": "mod-fields-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Polynomials",
  "body": " Polynomials  A good deal of time is spent studying polynomials in algebra courses that are intended to be a preparation for the study of calculus. A polynomial in over  is an expression of the form The set of all polynomials in over is denoted . We'll use the addition and multiplication you likely learned in high school (in addition, you ``add like terms'', in multiplication you need to use the distributive property).  Which of the properties of a field do polynomials have?   "
},
{
  "id": "mod-fields-7",
  "level": "1",
  "url": "mod-fields-7.html",
  "type": "Section",
  "number": "1.5",
  "title": "Other Operations",
  "body": " Other Operations  Consider . That is, the real numbers, but in the field axioms, replace addition with subtraction, and multiplication with division. Is a field?    "
},
{
  "id": "mod-fields-8",
  "level": "1",
  "url": "mod-fields-8.html",
  "type": "Section",
  "number": "1.6",
  "title": "Rectangle Math",
  "body": " Rectangle Math  This definition of multiplication is taken from James Tanton (who is math YouTube famous).  Here's how it works: To compute the product of two numbers, say four times three, draw a four-by-three array of dots and count the number of (horizontal\/vertical) rectangles one can draw with vertices on the grid. (Squares are also considered rectangles.)     Here, there are six rectangles, three s, four s, two s, two s, and one , giving a total of eighteen rectangles. So, Here the is standing for ``rectangle multiplication''.  Your goal is to figure out if the properties of a field hold with this new multiplication. But wait! You also need a set and an addition. Let's decide our set is the whole numbers, and the addition is the standard addition you know and love. I recommend you start by computing rectangle multiplication for a few pairs of whole numbers!    Summarize: Fill in the table below to indicate which properties hold in which number systems. You can use Y\/N for yes\/no or checkmarks and X's, or colors, or whatever works best for you.  90 \\html-tag:tabular{\\html-attr:left{\"minor\"}\\html-tag:col{\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:col{\\html-attr:halign{\"center\"}\\html-attr:right{\"minor\"}}\\html-tag:row{}\\html-tag:row{\\html-tag:cell{}\\html-tag:cell{$\\mathbb{N}$}\\html-tag:cell{$\\mathbb{W}$}\\html-tag:cell{$\\mathbb{Z}$}\\html-tag:cell{$\\mathbb{Q}$}\\html-tag:cell{$\\mathbb{R}$}\\html-tag:cell{$\\mathbb{R}\\setminus \\mathbb{Q}$}\\html-tag:cell{$\\mathbb{C}$}\\html-tag:cell{$\\mathcal{M}_{2}(\\mathbb{R})$}\\html-tag:cell{$\\mathbb{R}[x]$}\\html-tag:cell{$(\\mathbb{W},+,\\times_{\\square})$}\\html-tag:cell{$(\\mathbb{R},-,\\div)$}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Closed under addition}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Closed under multiplication}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Addition associative}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Multiplication associative}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Addition commutative}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Multiplication commutative}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Additive identity}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Multiplicative identity}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Additive inverses}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Multiplicative inverses}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{Multiplication distributes over addition}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}\\html-tag:cell{}}\\html-tag:row{\\html-tag:cell{}}}  Review Questions Make sure you can answer the following questions:   What are the sets and ?    What is a binary operation? And what does it mean for a binary operation to be closed?    What are properties of fields? Which of and are fields? If they are not fields, which properties are they missing?    Why do you think DocK called fields ``The Good Place''?    "
},
{
  "id": "mod-fields-9",
  "level": "1",
  "url": "mod-fields-9.html",
  "type": "Section",
  "number": "1.7",
  "title": "A page for you to summarize important ideas from the module",
  "body": " A page for you to summarize important ideas from the module   "
},
{
  "id": "mod-fields-10",
  "level": "1",
  "url": "mod-fields-10.html",
  "type": "Section",
  "number": "1.8",
  "title": "Weekly Practice 1",
  "body": " Weekly Practice 1     Consider the set (the set of all ordered pairs of integers). For , we define addition as and we define multiplication as . Which of the field properties hold for ? Does your answer change for ?    It is one of the axioms of the integers that multiplication distributes over addition. That is, for all integers and , .   What it would mean for addition to distribute over multiplication in the integers? Write a precise definition. (Like what's written at the start of this question.)    In the integers does addition distribute over multiplication? Give a proof or a counterexample.    In the integers, does addition distribute over addition? Write a precise definition, and give a proof or a counterexample.       You've known for a while that for any integer , .   How would you explain to an elementary schooler that ?    It turns out to be true in *any* field  Actually any ring, but you don't know what that is yet :) that for any , , where is the additive identity. This may at first seem silly (even elementary schoolers sort of know this!), but actually, it's not that obvious. To see why this is not obvious - try thinking a little more abstractly - why should the additive identity of a field, multiplied by anything, give back the additive identity? The additive identity is the thing that when you add it to anything doesn't change it. There's no reason it should have any reasonable interaction with multiplication. Prove that for any field and any that using only the field properties. This is part of the motivation for the abstraction to fields. You've interacted with fields (like ) for a long time. This abstraction allows us to explore the common features at the same time - it is inefficient to prove the same statement about every single field when we can prove it once and for all about fields in general.    Hint: consider in two different ways. See me if\/when you get stuck!  Zero is a weird concept. I have an entire book on zero in my office. From the back cover: ``The Babylonians invented it, the Greeks banned it, the Hindus worshipped it, and the Church used it to fend off heretics.'' Wow.         "
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
