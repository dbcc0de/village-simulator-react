import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// // 1. Make GitHub repo
// 2. Add collaborators (accept invite)
// 3. Create project with bare bones and push to repo
// 4. git clone the repo if you aren't the one to set it up
// 5. select your driver
// 6. Driver makes branch (git checkout -b feature/<featureName>)
// 7. code away!
// 8. done with your feature
// 9. git status to check where you are
// 10. git add .
// 11. git commit -m "message"
// 12. git pull origin main
// 13. git push (will give you command line)
// 14. paste the command that was given to you
// 15. click on GitHub link they give you
// 16.open pull request
// 17.teammate will merge your code after checking it
// 18. click delete branch on GitHub
// 19. back in vsCode git checkout main
// 20. git pull
// 21. git branch -d feature/<featureName>
// 22. Select new driver and repeat steps starting at 5!

// Next steps: edit the resource list based on dialogs
// style
// icons => font awesome
// upgrade / downgrade / remove buttons
// if type === this, benefit = this, cost = cost
// scale for level have a multiplier effect
// extended challenges
