# ingangsters-web

## Automation Scripts

### shareFolder

Since Docker has issues when working with an AD account, a good workaround is to create an alternative user, with your same credentials, the only difference is that this user is local for your current computer. For this to work, you also need to grant full access to certain folders to that user in order to use it with Docker.
This script serves that purpose, it creates the user automatically (when it does not exist) for you and grants the full access to the folders you tell it.
Example:

```bash
shell> shareFolder path/to/my/folder [...more paths]
```

### setupDocker

This script handles in one click (cmd call) all the issues related to container, images and file sharing. There are situations that this script cannot handle by itself. Sometimes, when we switch branches, Docker loses access to the files, and we need to restart the container (type `CTRL + C` once). And it will do it automatically for you. If for some reason it continues to fail. Kill this task and run it again as `setupDocker.bat force`
