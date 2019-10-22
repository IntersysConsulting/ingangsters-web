#!/bin/bash
echo REACT_APP_API_URL=$REACT_APP_API_URL > .env;
npm run build;
npx serve -s build;