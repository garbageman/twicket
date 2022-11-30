# Twicket

This is a small project to create a concert ticket purchasing app.

## Development

### Local

The app can be run locally via `yarn build` then `yarn start`. This will install
necessary dependencies and run the client on your computer.

### Storybook

Primarily you will want to be doing most of your component development within
the storybook framework. You will need to add a story file
`component-name.stories.tsx` and within it enumerate the different props that
your component could take. This file will be picked up by the storybook script
that can be run via `yarn storybook`.

### Docker

As a part of the development process we want to test how the app works within a
docker container. In order to test that you must start your own docker instance
and create an image called twicket.

Then you can run the `run_dev_docker_server.sh` script that will handle building
the instance for you and running it within docker.
