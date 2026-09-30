$src = "c:\Users\kaila\OneDrive\Desktop\Air bnb\airbnb-clone"
$dest = "c:\Users\kaila\OneDrive\Desktop\Air bnb\airbnb-clone-submission.zip"
Get-ChildItem -Path $src -Exclude "node_modules", ".next" | Compress-Archive -DestinationPath $dest -Force
