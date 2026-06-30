---
tags:
  - Note/Plate/Electrical
  - ElectricalTheory
aliases:
  - _template
createdDate: "2026-02-16"
---
# Chapter 23: Gauss's Law

Note_0: MOTIVATING QUESTION
"...there is an alternative relationship between charge distributions and their electric field. To discover this relationship let's stand the question of Ch 22 on its head and ask, '*if the electric field pattern is known in a given region, what can we determine about the charge distribution in that region?*'"

---
Note_1: CAVEAT
We're going to skimp on the derivations in this chapter, since at present we are not studying to be an electrical engineer. 

---
Note_2: ELECTRIC FLUX FOR UNIFORM $\vec{E}$ PASSING THRU FLAT SURFACE $\vec{A}$
Using the field of velocity vectors $\vec{v}$ of a flowing fluid as an analogy for electric field lines "flowing" through a surface, the volume flow rate $\frac{dV}{dt}$ of a fluid passing thru a wire rectangle with area A can be expressed like so: $$\frac{dV}{dt}= \vec{v} \cdot \vec{A} = vA\cos{\theta}$$
where  $\vec{A}= A\vec{n}$  and  $\vec{n}$  is a unit normal vector perpendicular to the surface A, and  $\theta$  is the angle between  $\vec{n}$  and  $\vec{v}$. 

Correspondingly, the **electric flux**  $\Phi_E$  thru surface A can be expressed as: $$\Phi_E = \vec{E} \cdot \vec{A} = EA\cos{\theta}$$
Note that  $\Phi_E$  is a scalar value that can be POSITIVE or NEGATIVE.

---
Note_3: ELECTRIC FLUX GENERAL DEFINITION
When  $\vec{E}$  is not uniform, but varies over a CLOSED surface A, then we divide A into many small elements  $d\vec{A}$  such that  $d\vec{A} = \vec{n}dA$  and we calculate the electric flux thru each such element, and integrate over the entire surface A: $$\Phi_E = \oint_A \vec{E} \cdot d\vec{A} = \oint_A EA\cos{\theta}$$
As stated above, electric flux is a SCALAR value, and can be either positive or negative depending on the relative orientations of  $\vec{E}$  and  $\vec{A}$  . The normal vector to A is taken by definition to point OUTWARDS from the closed surface A, and so we have these cases: 
 - OUTWARD electric flux corresponds to POSITIVE  $\Phi_E$  meaning the contained charge is POSITIVE 
 - INWARD electric flux corresponds to NEGATIVE  $\Phi_E$  meaning the contained charge is NEGATIVE 

 ---
 Note_4: GAUSS'S LAW
 Gauss's Law is an alternative to Coulomb's Law for expressing the relationship between electric charge and electric field. It states that the TOTAL electric flux thru any CLOSED surface is proportional to the TOTAL NET ELECTRIC CHARGE  $Q_{encl}$   inside that surface. $$\Phi_E = \oint_A \vec{E} \cdot d\vec{A} = \oint_A EA\cos{\theta} = \frac{Q_{encl}}{\epsilon_0}$$
 where  $Q_{encl}$  is the algebraic sum of all the enclosed charges  $q_1 + q_2 + ... + q_m$   .

---
Note_5: SO FAR WE HAVE...
So far, the topics that have been introduced are
 1. electric charge  $q$
 2. Coulomb's Law (Ch 22)
 3. Electric Field  $\vec{E}$  (Ch 22)
 4. Electric field lines  (Ch 22)
 5. Electric flux  $\Phi_E$  (Ch 23)
 6. Gauss's Law  (Ch 22)

--- 
Note_6: EXCESS CHARGE ON A CONDUCTOR 
Under ELECTROSTATIC conditions: "*When excess charge is placed on a solid conductor, and that charge is at rest, that excess charge resides entirely on the surface, NOT in the interior of the material.*"

We know from [[Electrical Theory Ch 22]] Note_8 that in an electrostatic situation,  $\vec{E}=0$  at every point within the material of a conductor. Suppose we construct a Gaussian Surface within the material of the conductor, just below it's exterior surface. Because  $\vec{E}=0$  everywhere on this surface, Gauss's Law requires that the total net charge contained within this surface be ZERO. imagine collapsing this Gaussian Surface down towards the center of the conductor: at every interval it is still the case that  $\vec{E}=0$ everywhere on the surface, all the way down to the point where the surface is collapsed down to a single point. CONCLUSION: *there can be NO excess charge at any point within a solid conductor; ANY excess charge must reside on the conductor's surface.*
![[electric-charge-on-a-solid-conductor.png#center|300]]

IF the solid conductor has a cavity somewhere within it, AND there is NO CHARGE within that cavity, then the net charge ON THE SURFACE OF THE CAVITY must be ZERO, because the net charge still resides on the outer surface of the conductor.
![[electric-charge-on-a-solid-conductor-with-cavity.png#center|300]]
IF a charge  $q$  is placed inside the cavity, THEN there will be a charge  $-q$  distributed across the surface cavity. And since the TOTAL CHARGE on the conductor must remain ZERO, since no charge has been added/removed in any of these scenarios, a charge equal to  $q$  must now appear on the outer surface. 
![[electric-charge-on-a-solid-conductor-with-cavity-containing-a-charge.png#center|300]]
If the originally had charge  $q_c$  , then the total charge on the outer surface must be  $q_c + q$  once charge  $q$  is inserted into the cavity. 
