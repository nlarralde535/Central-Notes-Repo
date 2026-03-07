---
tags:
  - Note/Plate/Electrical
  - ElectricalTheory
aliases:
createdDate: 2026-02-25
---
# Chapter 24: Electric Potential

Note_1: REVIEW POINT 1
WORK is performed BY forces ON objects OVER some distance $$W_{a \rightarrow{} b} = \int_{a}^{b} \vec{F} \cdot d\vec{l} = \int_{a}^{b} F\cos{\theta} \,dl \ $$
Note_2: REVIEW POINT 2
Work done by CONSERVATIVE forces can always be expressed in terms of potential energy $$W_{a \rightarrow{} b} = U_a - U_b = -\Delta U $$
Note_3: REVIEW POINT 3
If the only work done on a particle is performed by CONSERVATIVE forces, then by the work-energy theorem ( $W_{a \rightarrow{} b} = \Delta K_{a \rightarrow{} b}$ ) we have $$W_{a \rightarrow{} b} = -\Delta U = \Delta K $$
And this means that the total mechanical energy of the system is conserved $$\Delta K + \Delta U = 0$$

---

Note_5:   $U_{elec}$  FOR SYSTEM OF POINT CHARGES
"...to calculate the work done on a test charge $q_0$  moving within the electric field caused by a SINGLE, STATIONARY point charge  $q$ ... we'll consider first a radial displacement of  $q_0$"
![[electric_potential_energy_system_of_point_charges.png#center|300]] 
"The force on $q_0$  is given by Coulomb's Law, and the radial component of that force is" $$F_r = \frac{1}{4\pi\epsilon_0} \frac{qq_0}{r^2}$$
"The force  $F_r$  is not constant during the displacement from a -> b and so we must integrate to calculate the work  $W_{a \rightarrow{} b}$"
$$ W_{a \rightarrow{} b} = \int_{r_a}^{r_b} F_r \,dr \ = \int_{r_a}^{r_b} \frac{1}{4\pi\epsilon_0} \frac{qq_0}{r^2} \,dr \ = \cdots$$ $$ \cdots = \frac{qq_0}{4\pi\epsilon_0} \left( \frac{1}{r_a} - \frac{1}{r_b} \right) $$
"...this equation is valid for any displacement path: the work done on  $q_0$  but the electric field produce by  $q$  depends ONLY on the beginning and end points, not on the particular details of the path." 

Finally, we define the ELECTRIC POTENTIAL ENERGY  $U_r$  of the two-charge system comprised of  $q$  and  $q_0$  to be  $$ U_r = \frac{qq_0}{4\pi\epsilon_0} \frac{1}{r}$$
WHEN the two charges are SEPARATED by a distance  $r$. And we can now see the the work  $W_{a \rightarrow{} b}$  done by the electric force (of the electric field produced by $q$ ) on  $q_0$  as it moves from point (a) to point (b) EQUALS the difference in the ELECTRIC POTENTIAL ENERGY of the two-charge system at point (a) vs. at point (b) $$W_{a \rightarrow{} b} = -\Delta U = U_a - U_b = \frac{qq_0}{4\pi\epsilon_0} \left( \frac{1}{r_a} - \frac{1}{r_b} \right)$$
This ^ is so because the electric force is CONSERVATIVE.

---
Note_5: INTERPRETING  $U_r$
"Potential energy is always defined relative to some reference point where  $U=0$ . In the above case,  $U=0$  when  $r=\infty$. Therefore,  $U_r$  represents the work that would be done on  $q_0$   in order to move it from an initial distance  $r$  from  $q$  , to a distance of  $\infty$  from  $q$"

Consider the following diagram 
![[interpreting_electric_potential_energy.png#center|300]]

The electric force between  $q_0$  and $q$  is ATTRACTIVE, which means the two charges want to be as close together as possible ( $r \rightarrow 0$ ), which means the force of the electric field  $\vec{E_q}$  naturally wants to draw  $q_0$  as close to $q$  as possible, which means for this system of charges  $U_r \uparrow$   as  $r \downarrow$ , and visa-versa. 

In the diagram, when  $q_0$  moves from  $r_0 \rightarrow r_2$  the force  $F_2$  IS the force of the electric field  $\vec{E_q}$ , and this force is doing POSITIVE WORK on  $q_0$. I'm terms of electric potential energy, since the two charges have OPPOSITE signs, we have $$U_{r_0} = \frac{qq_0}{4\pi\epsilon_0} \frac{1}{r_0} < 0 $$
and $$U_{r_2} = \frac{qq_0}{4\pi\epsilon_0} \frac{1}{r_2} < 0$$
and since both values of electric potential energy are negative, the SMALLER negative value represents the GREATER potential energy, and since  $\frac{-1}{r_0} > \frac{-1}{r_2}$ : $$U_{r_0} > U_{r_2}$$
And the electric force moves the system towards LOWER electric potential energy. (THIS  $\leftarrow$ is a GENERAL RULE:  $U$  decreases when a test charge moves IN THE DIRECTION OF the electric force that is acting on it). 

The opposite is true when  $q_0$  moves from  $r_0 \rightarrow r_1$. In this scenario, the electric force does NEGATIVE work, and some external force  $F_1$  does POSITIVE WORK on  $q_0$  in order to move it to a position of higher electric potential energy  $U_{r_1}$. 

The inverse of all this $\uparrow$ occurs when the two charges in the system have the SAME SIGN...(this is left as an exercise for the reader) 
 
---
Note_6: $\Delta U$ FOR A POINT CHARGE 
Regardless of the polarity of a test charge, the electric potential energy of the charge-field system INCREASES when the test charge moves in the OPPOSITE direction of the electric force (produced by the electric field) acting on the test charge. And the potential energy DECREASES when the test charge moves in the SAME direction as the electric force acting on it. 

You "load the spring" by moving the test charge in the opposite direction as the electric force is pulling it. 

**CAUTION**: the electric force acting on a test charge DOES NOT necessarily point in the same direction as the ELECTRIC FIELD the test charge is within. 

![[electric_potential_orientation_for_point_charges.png#center|300]]

---

Note_7: ELECTRIC POTENTIAL $V$ 
Electric potential is DEFINED as *potential energy per unit charge* at a distance  $r$  from the reference charge distribution: $$V_r = \frac{U_r}{q_0} = \frac{1}{q_0}\frac{qq_0}{4\pi\epsilon_0r} = \frac{q}{4\pi\epsilon_0r}$$
Here ^ we are pretending that, within the system of charges $q \leftrightarrow q_0$ , the test charge is a UNIT CHARGE  ($q_0 = 1$ ).

$V$ is a property of a discrete charge distribution, represented in our example by the single charge $q$. It is independent of any test charge. 

This ^ definition comes from dividing the equation for the work done by a conservative force  ($W_{a \rightarrow{} b} = -\Delta U$)  by the value of the test charge  $q_0$.  $$\frac{W_{a \rightarrow{} b}}{q_0} = \frac{-\Delta U}{q_0} = -\left( \frac{U_b}{q_0} - \frac{U_a}{q_0} \right) = \cdots $$
$$\cdots = - \left( V_b - V_a \right) = V_a - V_b = V_{ab}$$

---

Note_8: INTERPRETING ELECTRIC POTENTIAL 
In order to calculate electric potential, you need a reference charge distribution  $q$  and a reference point in space that is a distance  $r$  from the reference distribution. 

The POTENTIAL DIFFERENCE  $V_a - V_b$  between two distinct reference points (a) and (b), is the WORK that would be done BY THE ELECTRIC FORCE of the ELECTRIC FIELD generated by the reference charge distribution, in order to move 1 unit of charge from (a) to (b). 

For a POSITIVE reference charge distribution  $+q$:
- if the work done by the electric field is POSITIVE, then that means  $V_a > V_b$  , and the unit of charge was displaced IN THE DIRECTION OF the electric field.
 - If the work done by the electric field is NEGATIVE, then that means  $V_a < V_b$ , and the unit of charge was displaced OPPOSITE THE DIRECTION OF the electric field. This means some EXTERNAL FORCE  $F_{ext}$ is opposing the electric force of the reference charge distribution.
The inverse of this ^ is true for a NEGATIVE reference charge distribution. 

---

Note_9: RELATIONSHIP BETWEEN  $\vec{E}$  and  $V$
An EQUIPOTENTIAL SURFACE is an imaginary surface surrounding a charge distribution  $q$. An equipotential surface has the property that at every point $i$ thereon, the electric potential has the SAME VALUE  ($V_i = x$). The shape of a given equipotential surface (for example, the surface such that $V_i = \alpha$) is determined by the charge distribution  $q$, and the electric field it generates.

If a test charge  $q_0$ were to move along an equipotential surface of a nearby charge distribution  $q$,  the electric field of  $q$  would be doing NO WORK on  $q_0$. That is, for any two points (a) and (b) on the equipotential surface, $$\frac{W_{a \rightarrow{} b}}{q_0} = V_a - V_b = x - x = 0 $$
This ^ means that the electric field is everywhere PERPENDICULAR to every equipotential surface. This is so because work done by the electric force on a test charge  $q_0$  along a line from (a) to (b) is defined as   $$W_{a \rightarrow{} b} = \int_{a}^{b} \vec{F_{elec}} \cdot \,d\vec{l} \ = \int_{a}^{b} q_0\vec{E} \cdot \,d\vec{l} \ = \cdots$$
$$\cdots = \int_{a}^{b} q_0 E\cos{\theta} \,dl \ $$

Following from this ^, we can express the potential difference  $V_a - V_b$  in terms of the electric field like so: $$V_a - V_b = \int_{a}^{b} \vec{E} \cdot \,d\vec{l} \  = - \int_{b}^{a} \vec{E} \cdot \,d\vec{l} \ $$
If we pick point (b) to be  $\infty$  then the above expressions becomes $$V_a - 0 = \int_{a}^{\infty} \vec{E} \cdot \,d\vec{l} \ = -\int_{\infty}^{a} \vec{E} \cdot \,d\vec{l} \ $$
and this ^ is INTERPRETED as EITHER 
 - "the potential at point (a) is the work done by the electric field to move a unit charge from $\infty$ to point (a) " OR
 - "the potential at point (a) is the work done by an external force  $\vec{F_{ext}} = - \vec{E}$  , OPPOSING the electric field to move a unit charge from point (a) to  $\infty$ "

BECAUSE the magnitude of the electric field varies according to  $\frac{1}{r^2}$  the magnitude of the electric field is NOT necessarily the same at all points on an equipotential surface. 