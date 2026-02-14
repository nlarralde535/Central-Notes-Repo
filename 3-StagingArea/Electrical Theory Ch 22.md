---
tags:
  - Note/Plate/Electrical
  - ElectricalTheory
aliases:
  - _template
createdDate: "2026-02-11"
---
# Chapter 22: Electric Charge and Electric Field


Note_1:
OVERVIEW & INTRODUCTION: 

"We'll find that **electric charge** is *quantized* and that it obeys a conservation principle."

The progression of this chapter is as follows: 
 - discussion of electric charges at rest (**electrostatics**)
 - discussion of the relationship that governs electrostatic interactions: **Coulomb's Law**
 - discuss a convenient conceptual tool for understanding Coulomb's Law: the **electric field**

"We can't say what electric charge IS, we can only describe its properties and its behavior."

There are 2 different kinds of electric charge: POSITIVE and NEGATIVE. Electric charge is a property of the three atomic particles: 
 - proton (POSITIVE charge)
 - electron (NEGATIVE charge)
 - neutron (no charge)

---
Note_2: QUANTIZATION OF CHARGES
"In a neutral atom the number of protons equals the number of electrons, and the NET electric charge of the atom is ZERO. ... The gaining or losing of electrons by an atom is called *ionization*"
Similarly, "when the total number of protons in a macroscopic body equals the total number of electrons, the NET charge is ZERO and the body is electrically neutral. "

This ^ is what "quantization" of electric charge means: the QUANTITY of electric charge depends directly on the QUANTITY  of charged particles. And these charge-bearing particles only exist in discrete, integer quantities. ${1, 2, 3 ...}$ 
"The magnitude of charge of the electron or proton is a natural unit of charge. Every observable amount of electric charge is always an integer multiple of this basic unit."

---
Note_3: TRANSFERRING CHARGES
To give a neutral body an excess negative charge, we can either ADD negative charges (electrons) or REMOVE positive charges. (protons). Similarly, to give a neutral body an excess positive charge, we can either REMOVE negative charges (electrons) or ADD positive charges.

"In most cases, negatively charge (and highly mobile) electrons are what gets added or removed, and a positively-charged body is one that has lost some of its normal complement of electrons"

---
Note_4: NET CHARGE
"When we speak of the charge on a body we always mean it's NET charge. The net charge is always a very small fraction (typically no more than $10^{-12}$) of the total positive or negative charge in the body "

---
Note_5: COULOMB'S LAW
"The *magnitude* of the electric force between TWO point charges is directly proportional to the product of the magnitude of the charges, and inversely proportional to the square of the distance between them" $$F_{elec} = k \frac{\left| q_1q_2 \right|}{r^2}$$
"The *directions* of the forces the two charges exert on one another are always along the line joining them. When the charges have the same sign, the forces are repulsive, when the charges have opposite signs the forces are attractive."

"In SI units we usually write the constant $k$ like as:" $$F_{elec} = \frac{1}{4\pi\epsilon_0} \frac{\left| q_1q_2 \right|}{r^2}$$

---
Note_6: ELECTRIC FIELD 

Take the case of two positively-charged bodies A and B, the force each experts on the other is a repulsive force. "A more fruitful way to imagine the repulsion between A and B is as a two-step process." 
 1. First imagine that A, as a result of the NET POSITIVE charge that it carries, *somehow modifies the properties of the space around it*
 2. Second, body B, due to its own NET POSITIVE charge,  senses how the space at the position that it occupies relative to A has been modified by A
This ^ two-step process results in B feeling the repulsive force. "We take the point of view that this force is exerted BY the field AT the point in space where B sits. **The electric force on a charger body is exerted by the electric field created by other charged bodies**"

A charged body CANNOT exert an electric charge on itself. "To find out experimentally whether there is an electric field at a given point in space, we place a charged body called a **test charge** at the point. If the test charge experiences an electric force then there is an electric field at that point."

DEFINITION: the electric field $\vec{E}$  at a point in space $(x_0, y_0, z_0)$ occupied by a test charge $q_0$ IS DEFINED AS the electric force $\vec{F_0}$ experienced by the test charge at that point in space. "That is, the electric field at a certain point is equal to the *electric force per unit charge* experienced by a charge at that point." $$\vec{E} = \frac{\vec{F_0}}{q_0}$$
![[direction-of-electric-force-relative-to-elec-field.svg#center]]

"If $q_0$ is POSITIVE, the force $\vec{F_0}$ experienced by the test charge is in the SAME DIRECTION as $\vec{E}$ " If $q_0$ is NEGATIVE, the force $\vec{F_0}$ experienced by the test charge is in the OPPOSITE DIRECTION as $\vec{E}$ "
This ^ is because, as we will see, electric field lines radiate OUT from POSITIVELY CHARGED bodies, and radiate IN towards NEGATIVELY CHARGED bodies. And so in the figure above, it is a POSITIVELY CHARGED body that is producing the electric field which acts on the test charges.

All electric fields are generated by some source distribution. "If the source distribution is a point charge $q$ , we call the location in space of this point charge the **source point** $S$, and we call the point $P$ where we want to determine the electric field the **field point**. It is also useful to introduce a *unit vector* $\vec{r}$ that points from $S$ to $P$ and whose magnitude is $1/r$, where $r$ is the distance from S to P" The magnitude of the electric force on a test charge $q_0$ sitting at $P$ is given by Coulomb's Law $$F_0 = \frac{1}{4\pi\epsilon_0}\frac{\left| qq_0 \right|}{r^2}$$
And the magnitude of the electric field $E$ at the point $P$ is $$E = \frac{F_0}{q_0} = \frac{\left|q\right|}{4\pi\epsilon_0r^2}$$
Using the unit vector $\vec{r}$ we can write a vector equation that gives both the magnitude and direction of the electric field $$\vec{E} = \frac{q}{4\pi\epsilon_0r^2}\vec{r}$$
DEFINITION: the electric field of a point charge always points AWAY from a positive charge, and TOWARDS a negative charge. 

![[elec-field-point-charges.png#center]]

---
Note_7: ELECTRIC FIELD LINES
"An **electric field line** is an imaginary line or curve drawn through a region of space so that it's TANGENT at any point along the curve is in the direction of the electric field at that point. ... A field line is NOT a curve of constant electric field magnitude: in general, the magnitude of the electric field is different at different points along a given field line. ... $\vec{E}$ has only one unique direction at every point in space, and therefore electric field lines do NOT intersect."

"Electric field lines show the direction of $\vec{E}$ at each point in space, NOT the magnitude of $\vec{E}$ ; rather, it is the relative spacing of electric field lines that gives a general idea of the magnitude of $\vec{E}$ at each point: where $\vec{E}$ is strong we draw field lines bunched closer together, where $\vec{E}$ is weaker we draw them spaced farther apart."