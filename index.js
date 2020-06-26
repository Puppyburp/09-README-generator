const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project."
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: [
        "GNU GPLv3",
        "MIT License",
        "Apache License 2.0", 
        "BSD 3-clause",
        "Boost Software License 1.0",
        "The Unlicense", 
      ]
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be input to install dependencies?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be input to run tests?"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "input",
      name: "contributions",
      message: "What does the user need to know about contributing to the repo?"
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }
  ])

.then(function(response) {
  let today = new Date();
  // year for copyright
  let year = today.getFullYear();
  // badge for license
  let badge;

  // license information
  switch (response.license) {
    case "GNU GPLv3":
      badge = `[![GNU GPLv3 License](https://img.shields.io/badge/license-GNU%20GPLv3-blue)](https://www.gnu.org/licenses/gpl-3.0.html)
      
      Copyright (c) ${year} ${response.githubUsername}

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>`
      break;
      case "MIT License":
          badge = `[![MIT License](https://img.shields.io/badge/license-MIT-yellowgreen)](https://opensource.org/licenses/MIT)
          
          Copyright ${year} ${response.githubUsername}

          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          break;
      case "Apache License 2.0":
          badge = `[![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)](https://opensource.org/licenses/Apache-2.0)

          Copyright ${year} ${response.githubUsername}

          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
       
            http://www.apache.org/licenses/LICENSE-2.0
       
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.`
          break;

      case "BSD 3-clause":
          badge = `[![BSD 3-clause](https://img.shields.io/badge/license-BSD%203--Clause-lightgrey)](https://opensource.org/licenses/BSD-3-Clause)

          Copyright ${year} ${response.githubUsername}

          Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
          
          1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
          
          2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
          
          3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
          
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
          break;
          case "Boost Software License 1.0":
          badge = `[![Boost Software License 1.0](https://img.shields.io/badge/license-BSL%201.0-blue)](https://opensource.org/licenses/BSL-1.0)

          Copyright ${year} ${response.githubUsername}
          
          Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:

          The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          break;
          case "The Unlicense":
          badge = `[![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-yellow)](https://opensource.org/licenses/unlicense)

          Copyright ${year} ${response.githubUsername}
          
          This is free and unencumbered software released into the public domain.

          Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.
          
          In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          
          For more information, please refer to <http://unlicense.org/>`
          break;
      default:
          badge = "No badge match!";
  }
    // create the README doc
    const readmeInputs = `
    #Title
    ${response.title}
    ------------------------------------
    ##Description
    ${response.description}
    ------------------------------------
    ##Badge
    ${badge}
    ------------------------------------
    ##Table of Contents:
      1. [License](#License)
      2. [Dependencies](#Dependencies)
      3. [Tests](#Tests)
      4. [Usage](#Usage)
      5. [Contributions](#Contributions)
      6. [Questions](#Questions)

    ------------------------------------
    ##License
    ${response.license}
    ------------------------------------
    ##Dependencies
    ${response.dependencies}
    ------------------------------------
    ##Tests
    ${response.test}
    ------------------------------------
    ##Usage 
    ${response.usage}
    ------------------------------------
    ##Contributions
    ${response.contributions}
    ------------------------------------
    ##Questions
    Please direction questions to ${response.githubUsername} or email ${response.email}
    `
    console.log(response);

  // write the README, tell user the file has been created
  fs.writeFile("README.md", readmeInputs, function(err){
    if (err){
        return console.log(err);
    }
    console.log("Your README file has been generated!")
  })

});