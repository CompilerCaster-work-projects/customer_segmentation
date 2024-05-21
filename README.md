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
9. Frequency of inspections (average for all drivers in the company (amount (times each specific driver undergoes inspection)/number of drivers))
10. Number of active drivers in the company (the number of company drivers who had inspections during a certain period of time studied by us)
11. Average daily percentage of drivers who pass inspections out of all active drivers
12. Number of PACs in the organization (amount (number of PACs in the organization for a certain day)/number of days in the period we studied). That is, the average of those. PACs that the organization had every day during the period we studied
13. What are the limits on the company’s health indicators? (I’ll make a reservation that individual health boundaries can be expanded not only for specific drivers, but also for all drivers in a given company in general)

We will also need the satisfaction indicators of both companies and their levels of exclusion at certain points in time.

In the beginning we take Taxpayer Identification Number (TIN) (in Russia we call it INN) from anywhere. For example, this could be a database script:
```sql
select distinct o.inn as “ИНН”
from structures.organizations o
```
Next, we add this information about the TIN to an Excel file and, according to the instructions from the site (https://micro-solution.ru/projects/proxl), download and install the add-in in Excel, which allows you to automatically obtain information about all Russian companies and private entrepreneurs without the need to search for this information manually on the Internet. Then we search by TIN **for the first 4 items from the list** that we need.
![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/b6cb4716-1789-4625-bab4-52e5c7afd985)


We get information **for points 5-7** from a corporate Excel file with information about clients, which was provided to me by a manager from the sales department.

We also receive information **for point 8** from the sales manager in the form of the “Comment” field, and then we create fields with the rating of this comment. The rating can be negative, positive or neutral.
![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/b6aa9cbd-464d-4b4d-b4db-bc6e3ed3bfd5)

**for item 10** from the list:

just run the script ```active_drivers.js```. Then we paste this data into Excel, like all the data we receive.

**for item 11** from the list:

First, let's run the script ```average_daily_percentage_of_drivers.js```. After uploading, you will have data with the following structure:

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/4b9ab24c-e0b6-493e-82fd-943f286968ae)

Now, using the VLOOKUP, we insert a column next to the active drivers for the entire period:

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/54c5b4e4-e94b-4e87-ac5b-108ee78c57d4)

And then we get the percentage of drivers who passed inspections on a particular day from all active drivers during the period we studied:

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/56e8b1e5-fba3-41bf-9a74-573e66435471)

As a result, you will get a table with the following structure:

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/9f192127-7a24-4c0a-b3f5-ca534e4a5bd9)

Next, we need to find the average percentage for each company over the time period we are studying (the rightmost table in the screenshot):

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/d7987684-c314-4751-841f-fd1d8239d8a5)

We stretch its right column according to the formula indicated on the screenshot, and in the left column we simply designate all the unique TIN of the companies we study in any way.

***Next, we tried to conduct correlation analysis and analysis using the conjugate table method:***

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/b1143cf7-f3a1-44dc-ba92-837d6a46c69f)

![изображение](https://github.com/CompilerCaster/customer_segmentation/assets/128957307/2f362224-7f2e-4029-aef0-0cf16e2cd711)


***And then they made the following conclusions:***

The fewer branches a company has, the greater the satisfaction, but the null hypothesis cannot be rejected (probability of error - 5%). To be even more precise, there is an 89% probability that there is no relationship, since the p-value is much higher than the critical level (significance level).

At this point I completed this project.












