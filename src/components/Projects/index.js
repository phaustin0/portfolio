import React from "react";
import {
  Container,
  Title,
  LeftArrow,
  RightArrow,
  ProjectCards,
} from "./Projects";
import {
  ProjectCardTitle,
  ProjectCardText,
} from "components/ProjectCard/ProjectCard";
import ProjectCard from "components/ProjectCard";
import Bible from "assets/bible.png";
import Pathfinding from "assets/pathfinding.png";
import Sorting from "assets/sorting.png";
import TicTacToe from "assets/tictactoe.png";
import Runaway from "assets/runaway.png";
import School from "assets/school.jpg";

const Projects = () => {
  return (
    <Container id="projects">
      {/* Title */}
      <Title>
        <LeftArrow></LeftArrow>
        My Projects
        <RightArrow></RightArrow>
      </Title>

      {/* Project Cards */}
      <ProjectCards>
        {/* Bible Bot */}
        <ProjectCard
          image={Bible}
          link="https://github.com/phaustin0/biblebot"
          overlay={
            "Learnt communication skills in a programming setting. Also learnt how to work together with someone for a client."
          }
        >
          <ProjectCardTitle>Bible Bot for Discord</ProjectCardTitle>
          <ProjectCardText>
            Type in the reference of one or more Bible verses and this bot will
            print it out for you onto the Discord channel. Great for Bible
            studies.
          </ProjectCardText>
        </ProjectCard>
        {/* Pathfinding Visualiser */}
        <ProjectCard
          image={Pathfinding}
          link="htts://github.com/phaustin0/pathfinding-visualiser"
          overlay="Learnt Object-Oriented Design and how to implement algorithms into applications.
          "
        >
          <ProjectCardTitle>Pathfinding Visualiser</ProjectCardTitle>
          <ProjectCardText>
            Using the A* Search Pathfinding Algorithm, find the shortest path
            between two points.
          </ProjectCardText>
        </ProjectCard>
        {/* Sorting Algorithm Visualiser */}
        <ProjectCard
          image={Sorting}
          link="https://github.com/phaustin0/sorting-visualiser"
          overlay="Learnt an array of sorting algorithms and how to use and implement them in code."
        >
          <ProjectCardTitle>Sorting Algorithm Visualiser</ProjectCardTitle>
          <ProjectCardText>
            Using Bubble, Selection, Insertion and Merge Sort, arrange the bars
            in ascending order.
          </ProjectCardText>
        </ProjectCard>
        {/* Tic Tac Toe */}
        <ProjectCard
          image={TicTacToe}
          link="https://github.com/phaustin0/tictactoe"
          overlay="Learnt how to implement the minimax algorithm into tictactoe."
        >
          <ProjectCardTitle>Tic Tac Toe with AI</ProjectCardTitle>
          <ProjectCardText>
            Using the minimax algorithm, try to beat the ultimate tictactoe
            player!
          </ProjectCardText>
        </ProjectCard>
        {/* Runaway Game */}
        <ProjectCard
          image={Runaway}
          link="https://github.com/phaustin0/runaway"
          overlay="Learnt how code jams work. Learnt how to read documentation and to look for the right questions."
        >
          <ProjectCardTitle>Runaway</ProjectCardTitle>
          <ProjectCardText>
            My game created for the Tech with Tim Code Jam in which the judging
            process is currently going on.
          </ProjectCardText>
        </ProjectCard>
        {/* Portfolio */}
        <ProjectCard
          image={School}
          link="https://github.com/phaustin0/portfolio"
          overlay="Learnt web development with the UI Framework, React, along with the styled-components and react-icons packages to build this website."
        >
          <ProjectCardTitle>This Portfolio</ProjectCardTitle>
          <ProjectCardText>This personal portfolio.</ProjectCardText>
        </ProjectCard>
      </ProjectCards>
    </Container>
  );
};

export default Projects;
