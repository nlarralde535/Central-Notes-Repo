---
tags:
  - Note/Plate/Electrical
  - ElectricalTheory
aliases:
  - _template
createdDate: 2026-02-09
---
# Chapter 7: Potential Energy and Energy Conservation 

Note_1: 
In the context of the gravitational force $F_{grav}$ , where a body is being raised/lowered a distance ( $s$ ) relative to the surface of the earth, gravitational work  $W_{grav}$  and potential energy  $\Delta U_{grav}$ are zero-sum. Here's a derivation: 
$$W_{grav} = F_{grav} s = weight(y_1-y_2) = mgy_1 - mgy_2$$
where BY DEFINITION: $$U_{grav} = mgy$$
and therefore $$W_{grav} = -\Delta U_{grav}$$

---
Note_2:
CAUTION: It is NOT correct to call the value  $U_{grav}=mgy$   the "graviational potential energy of the body being raised/lowered" because  $U_{grav}$  is a shared property of the earth-body system, bit of either individual component of that system. 

---
Note_3: 
DEFINITION: The **work-energy theorem** states that the total work  $W_{\Sigma}$  done on a body by some forces equals the change in that body's kinetic energy  $\Delta K$ . $$W_{\Sigma} = \Delta K $$
If ONLY THE FORCE OF GRAVITY is acting on this system then from *Note_1* we have: $$W_{\Sigma} = W_{grav} = -\Delta U_{grav} = \Delta K $$
which we can rewrite as $$K_2 - K_1 = U_1 - U_2$$
which we can also rewrite as $$K_1 + U_1 = K_2 + U_2$$
DEFINITION: the **total mechanical energy**  $E$  of a system at point (x) is defined as $$E_x = K_x + U_x $$
In the case when ONLY GRAVITY does work on a body we have $$E_1 = E_2 \rightarrow E_1 - E_2 = 0 $$
"A quantity that always has the same value is a *conserved* quantity. When only the force of gravity does work, the total mechanical energy is *constant*, that is, it is *conserved*. This is an example of the **conservation of mechanical energy**." 

---
Note_4:
In a system where the force of gravity  $F_{grav}$  is NOT THE ONLY FORCE doing work on a body ( suppose there are other forces which we will call   $F_i$  ), then the total work done by the forces in the system  $W_{\Sigma}$  is the sum of the work done by all the constituent forces:   $W_{\Sigma}=W_i+W_{grav}$

And by the **work-energy theorem** we have $$W_i+W_{grav}=\Delta K = K_2 - K_1$$
And by by definition of  $W_{grav}$  we have $$W_i + -\Delta U_{grav} = K_2 - K_1$$
After some rearranging of this ^ we get $$W_i = (K_2 + U_2) - (K_1 - U_1) =\Delta E $$
Finally we have the following conclusion: "*the total work done on a body by ALL FORCES other than the gravitational force equals the change in the TOTAL MECHANICAL ENERGY of the system*"

---
Note_5:
The work done by **conservative forces** has the following properties: 
1. can be expressed in terms of a potential-energy function, depending only on change in *position* of one element of a system relative to another ($W_{grav} =-\Delta U =my(y_1-y_2)$   )
2. can be converted back into potential energy without loss (the system loses no mechanical energy via the work done  by conservative forces)
3. is path-independent, relying only on the starting and ending position on the body
4. equals zero when the starting and ending points are the same (work performed around a closed path equals zero)
The work done by a **nonconservative force** CANNOT be represented by a potential-energy function because such forces cause mechanical energy to be lost or dissipated from the system. 
