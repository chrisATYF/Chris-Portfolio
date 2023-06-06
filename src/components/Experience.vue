<template>
    <div class="container">
        <div class="first-exp">
            <h4>Freelance Web Developer, Sherwood Arkansas</h4>
            <span>September 2021 - Current</span>
            <p>Developed, designed, tested, and debugged applications from foundational level up
                to full production levels. Enhanced applications and improved performance through testing and
                validations
                against requirements and performance standards. Adapted websites to match changing user preferences and
                client
                demands with regular updates. Created file back ups to local directory for recovery purposes.Designed,
                tested
                and debugged applications from foundation to full production. Researched latest website applications to
                keep
                up
                with trends and latest technologies. Executed programming projects adhering to coding standards, design
                styles
                and project management methodologies. Achieved development milestones and scheduled targets. Detected
                problems
                provided by client's feedback and implemented solutions. Managed back end server logic protocols and
                database
                connections. Executed web solutions with Visual Studio and ASP.NET MVC layouts. Completed new
                development
                work
                and updates using multiple programming languages.</p>
        </div>
        <div class="second-exp">
            <h4>Merkle Inc, Developer/Operations, Little Rock Arkansas</h4>
            <span>August 2019 - July 2021</span>
            <p>Monitored applications and infrastructure with observability technologies and managed alerts. Designed,
                developed and implemented full-stack development tools and technologies in team-based environment.
                Created
                diagrams and well-written documentation to articulate solutions to team members. Ran multiple
                mission-critical
                Linux servers via command line. Secured and configured databases for optimal functionality with minimal
                security risk. Produced clean, error-free code to meet aggressive timelines. Worked on new products and
                updated
                functionality of existing software systems. Excelled in Agile development environment using daily
                scrums,
                expert sprint planning and successful backlog grooming. Maintained software performance with regular
                updates.
                Managed smooth software development and deployment by supervising technicians, technologists and
                programmers.
                Kept up to date on web developments and trends. Closed security loopholes by debugging and patching
                software.
                Corrected errors in software designs during development and after installation. Resolved errors through
                close
                collaboration with quality assurance team. Analyzed user needs and workflows to create easy-to-use
                interfaces.
                Informed decision-makers about projects through documentation of specifications, activities and current
                status.</p>
        </div>
        <div class="third-exp">
            <h4>Freelance, .Net Developer, Sherwood Arkansas</h4>
            <span>November 2018 - February 2019</span>
            <p>Designed and implemented multi-tier software using ASP.NET MVC and SQL Server. Participated in the full
                software development life cycle from scoping, analysis, design, implementation and quality assurance to
                delivery and support. Analyzed business requirements, document technical guidance and promoted
                continuous
                integrated development by working with other developers and IT analysts. Participated in gathering
                specifications from users. Wrote clean, scalable code using. NET programming languages. Verified
                software
                conformance with standards for programming, design and quality. Kept up to date on web developments and
                trends.
                Worked on new products and updated functionality of existing software systems. Corrected errors in
                software
                designs during development and after installation. Maintained software performance with regular updates.
                Improved performance of existing software, helping organizations remain agile in face of changing needs.
            </p>
        </div>
    </div>
</template>

<style scoped>
h4 {
    letter-spacing: 3px;
}

span {
    letter-spacing: 2px;
    font-size: smaller;
    font-style: italic;
}

p {
    letter-spacing: 2px;
}

.first-exp,
.second-exp {
    margin-bottom: 15px;
}

.first-exp,
.second-exp,
.third-exp {
    padding: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px lightgray;
    animation: fade-in 2s;
}

.first-exp,
.third-exp {
    margin-left: 15%;
}

.second-exp {
    margin-right: 15%;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>