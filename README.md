# customer_segmentation
## Description
Client companies have various parameters, such as: number of employees, types of activities, region in which they are located, etc.
At the same time, there is a hypothesis that, depending on these parameters, clients may be satisfied or dissatisfied with different levels of non-permits in their company.
For example: "Mosgortrans" is a large government organization. There is an assumption that just based on its size and affiliation with the government, everyone there remains satisfied even with a high level of non-admission (for example, 40-50%).

And there is, for example, “DL-TRANS” - a private company with an expensive transportation service and not so many drivers. Therefore, they are unhappy with even a low level of non-admissions (every driver, every flight is very important for this type of company).

In this project, I had to find out on what parameters companies depend on their satisfaction with their level of non-admissions.

Solving this problem would allow:

1. More effectively retain customers: By knowing in advance which customers may be prone to leaving due to dissatisfaction, you can take measures to retain them, for example, by offering them special programs or conditions, or lowering the level of exclusion in their favor (for example, by using more loyal attitude of doctors to video recording, or through the active expansion of individual health boundaries for drivers).
2. Develop marketing strategies effectively: Predicting satisfaction levels can help develop more targeted marketing strategies. For example, for companies with a high potential for dissatisfaction, special offers or promotions can be developed to improve their satisfaction.

Unfortunately, I was not able to fully solve this problem, as other more important and urgent tasks appeared. But despite this, I made many important steps in this task in terms of data collection, which no one in the company had thought about before.

## How to run and get result
First, let's write down what characteristics companies have that, in our opinion, can influence satisfaction with the level of non-admissions.

So these are the characteristics:

1. Number of branches
2. Form of ownership (we will take it by OKFS code)
3. Something related to the location of the company (Legal address or region, etc.)
4. Organizational and legal form (we will take it according to the OKOPF code)
5. Type of activity of the company (we will take it by OKVED code)
6. The industry in which the company falls by its type of activity
7. What specific services did the company pay for?
8. Is the client considering alternative routes for conducting inspections?
9. Frequency of inspections (average for all drivers in the company: $ \frac{{\text{{amount (times each specific driver undergoes inspection)}}}}{{\text{{number of drivers}}}} $

10. Number of active drivers in the company (the number of company drivers who had inspections during a certain period of time studied by us)
11. Average daily percentage of drivers who pass inspections out of all active drivers
12. Number of PACs in the organization (amount (number of PACs in the organization for a certain day)/number of days in the period we studied). That is, the average number of those PACs that the organization had every day during the period we studied
13. What are the limits on the company’s health indicators? (I’ll make a reservation that individual health boundaries can be expanded not only for specific drivers, but also for all drivers in a given company in general)

