# gedit-nsis.lang

[gedit][1] is the official text editor of the [GNOME][2] desktop environment. By default it only comes the most basic syntax highlighter for NSIS scripts.

This new language file adds support for all NSIS commands up to v3.0a and will be maintained along NSIS development.

## Installation

### Windows

Make sure to have working copy of the official [gedit Windows built][3] installed

1. Download [`nsis.lang'][4]
2. Copy the file to *%PROGRAMFILES%\gedit\share\gtksourceview-2.0\language-specs*

### Linux

1. Download [`nsis.lang'][4]
2. Copy the file to */usr/share/gtksourceview-2.0/language-specs* (replace version to 3.0 if using Gnome 3)

### Mac OS X (MacPorts)

1. Download [`nsis.lang'][4]
2. Copy the file to */opt/local/share/gtksourceview-2.0/language-specs*

## License

All code dual licensed under:

* [The MIT License (MIT)][5]
* [The GNU Lesser General Public License, version 2.1][6]

## Donate

[<img src="https://raw.github.com/balupton/flattr-buttons/master/badge-89x18.gif" />](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/gedit-nsis.lang/&title=gedit-nsis.lang&description=Modern%20gedit%20syntax%20highlighter%20for%20NSIS%20scripts&language=en_GB&tags=nsis,gedit,syntax,highlighting,code&hidden=0&category=software)

[1]: http://projects.gnome.org/gedit/
[2]: http://www.gnome.org/
[3]: http://live.gnome.org/Gedit/Windows
[4]: http://raw.github.com/idleberg/gedit-nsis.lang/master/nsis.lang
[5]: http://opensource.org/licenses/MIT
[6]: http://opensource.org/licenses/lgpl-license