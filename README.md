# ingangsters-web

## Automation Scripts

### shareFolder

Since Docker has issues when working with an AD account, a good workaround is to create an alternative user, with your same credentials, the only difference is that this user is local for your current computer. For this to work, you also need to grant full access to certain folders to that user in order to use it with Docker.
This script serves that purpose, it creates the user automatically (when it does not exist) for you and grants the full access to the folders you tell it.
Example:

```bash
shell> shareFolder path/to/my/folder [...more paths]
```
