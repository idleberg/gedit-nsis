# gedit-nsis

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GNU General Public License](https://img.shields.io/badge/license-GPL%20v2-orange.svg?style=flat-square)](http://www.gnu.org/licenses/gpl-2.0.html)
[![GitHub](https://img.shields.io/github/release/idleberg/gedit-nsis.svg?style=flat-square)](https://github.com/idleberg/gedit-nsis/releases)
[![Travis](https://img.shields.io/travis/idleberg/gedit-nsis.svg?style=flat-square)](https://travis-ci.org/idleberg/gedit-nsis)
[![David](https://img.shields.io/david/dev/idleberg/gedit-nsis.svg?style=flat-square)](https://david-dm.org/idleberg/gedit-nsis?type=dev)

[gedit][1] is the official text editor of the [GNOME][2] desktop environment. By default it only comes the most basic syntax highlighter for NSIS scripts.

This new language file adds support for all NSIS commands up to v3.02.

## Installation

__Note__: change *gtksourceview* version to 3.0 if using Gnome 3

### Windows

Make sure to have working copy of the official [gedit Windows build][3] installed

1. Download [`nsis.lang`][4]
2. Copy the file to `%PROGRAMFILES%\gedit\share\gtksourceview-2.0\language-specs`

### Linux

1. Download [`nsis.lang`][4]
2. Copy the file to `/usr/share/gtksourceview-2.0/language-specs`

### Mac OS X (MacPorts)

1. Download [`nsis.lang`][4]
2. Copy the file to `/opt/local/share/gtksourceview-2.0/language-specs`

## License

All code is dual-licensed under [The MIT License (MIT)][5] and [The GNU Lesser General Public License (LGPL)][6].

## Donate

You are welcome to support this project using [Flattr][7] or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[1]: http://projects.gnome.org/gedit/
[2]: http://www.gnome.org/
[3]: http://live.gnome.org/Gedit/Windows
[4]: http://raw.github.com/idleberg/gedit-nsis/master/nsis.lang
[5]: http://opensource.org/licenses/MIT
[6]: http://opensource.org/licenses/lgpl-license
[7]: https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/gedit-nsis