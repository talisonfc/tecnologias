# Test report

Start configuration of continuos integration on GitLab is samless simple. The first step is install a gitlab ranner on a machine. Next step register my runner.

The runner is a process running on any machine that execute jobs configured by .gitlab-ci.yml. Whick gitlab do is use this machine to execute all jobs from ci or cd.

### Install gitlab-runner
	sudo apt-get install gitlab-runner

### Register runner

To register a runner, its necessery to get the token on gitlab

	gitlab-runner register
	
### Create .gitlab-ci.yml file
	nano .gitlab-ci.yml
