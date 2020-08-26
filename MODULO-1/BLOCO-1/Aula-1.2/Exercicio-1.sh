#/!bin/bash
mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt trybe_renamed.txt
mkdir backup
mv trybe_backup.txt ./backup/trybe_backup.txt
mkdir backup2
mv ./backup/trybe_backup.txt ./backup2/trybe_backup.txt
rm -r backup
mv ./backup2 ./backup
pwd 
ls -la
rm -r backup
clear
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
head -5 skills.txt
tail -4 skills.txt
rm *.txt
