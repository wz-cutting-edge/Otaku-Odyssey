# Web Development Project 4 - *AniGamba*

Submitted by: **William Zheng**

This web app: **combines the excitement of chance with the vast world of anime discovery. With a single click, users "roll" to receive a randomly selected anime, complete with key details such as genre, tags, and release year, as well as an image. If a user wants to avoid certain genres or tags, they can simply ban those attributes, ensuring future rolls won't include them. The app also keeps a history of all previously discovered anime during the session, allowing users to revisit favorites or track what they've seen. Designed for both seasoned anime fans and newcomers, AniGamba makes exploring new shows fun, interactive, and personalized.**

Time spent: **16** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [x] Added seperation for the Ban List to distinguish which attribute goes to which category

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![aniGamba](https://github.com/user-attachments/assets/97263a91-d4c7-49c0-9497-d8ff64bee80f)

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

My main challenge was learning the syntax for GraphQL queries, as this was my first time working with a GraphQL API and I have limited experience with APIs in general. Figuring out how to structure the queries took some trial and error. Testing the ban function was also tricky due to API rate limits, which meant I often had to wait for my limit to reset before continuing. Styling is always a challenge for me, but I’m happy with the clean and simple look I achieved. During testing, I discovered the API included NSFW content, so I made sure to filter that out. I chose genre and tag as bannable attributes to give users more flexibility, and added year as a third attribute mainly to meet the requirements and because it made the ban list more interesting. Overall, I learned a lot from this project and enjoyed the process. I’m looking forward to experimenting with other API formats like REST in the future.

## License

    Copyright [2025] [William Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
