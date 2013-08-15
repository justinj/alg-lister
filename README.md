Alg Lister
==========

Tool for RobYau/Brest that takes a list of algs, strips any AUF from the beginning and end, and then outputs the list again, removing any duplicates and sorting by QTM

TODO
====

17:43 <+Brest> so R L U2 F R L and L R U2 B L R are the same thing
17:47 <+Brest> JJ do R L U2 F R L and R L U2 B R L

16:33 <+Nibblr> justinjaffray: [18h22m] <Brest> Inputting (D' R2 U R2 U' R2 U' D R2 U' R2 U R2) gives no output. Same alg as (R2 U R2 U' R2 U' D R2 U' R2 U R2 
    D') with the D' shifted to the end. If both are inputted it's fine because one is preserved, but if only the "pre-D" alg is inputted then it 
  is lost. So if any alg with a D move first have the D move shifted to the end, but before pruning duplicates, then no algs are excluded.

16:33 <+Nibblr> justinjaffray: [18h21m] <Brest> Also, for AUF, algs that start with (D U) need the D shifted before removing AUF. Algs that end with (U D) 
  still need the U pruned. Which is similar to pruning algs that are duplicate by axial turns: (R L F2) and (R L B2).
