const fs = require('fs')
const path = require('path')
const unified = require('unified')
const markdown = require('remark-parse')
const html = require('remark-html')
const slug = require('remark-slug')
const headings = require('remark-autolink-headings')
const toc = require('remark-toc')
const remark = require('remark')
const vfile = require('to-vfile')
const collapse = require('remark-collapse')
const jsonFile = require('json-file')

var package = jsonFile.read('./package.json')

 /*
unified()
	.use(markdown)
	.use(slug)
	.use(headings)
	.use(html)
	.use(toc)
	.process(fs.readFileSync('../docs/Array.md'), function(err, file) {
		if (err) throw err
		fs.writeFileSync('Array.html', String(file), 'utf8')
		//console.log(String(file))
	})
*/


var header = HeaderTemplate('docs', package.get('name').replace('-dev', ''))
var style = '<style>\n'+fs.readFileSync(path.resolve('docs', 'templates', 'Style.css'), 'utf8')+'\n</style>'
//console.log(header('index'));console.log(header('Array'))

var pages = []
fs.readdirSync(path.resolve('docs'), {withFileTypes:true}).forEach(function (entry) {if (entry.isFile() && entry.name != 'index.md' && path.extname(entry.name) == '.md') {pages.push(path.basename(entry.name, '.md'))}})

GenerateIndex('docs', path.resolve('dist/docs/index.md'), header('index'))
pages.forEach(function (page) {
	GeneratePage(path.resolve('docs', page+'.md'), path.resolve('dist', 'docs', page+'.md'), header(page))
})


function HeaderTemplate (docsDir, pkgName) {
	var template = fs.readFileSync(path.resolve(docsDir, 'templates', 'Header.html'), 'utf8').replace(/\$\{Pkg\.Name\}/g, pkgName)
	var menuLinkTemplate = template.substring(template.indexOf('<!-- MenuLink.Start -->')+'<!-- MenuLink.Start -->'.length, template.indexOf('<!-- MenuLink.End -->'))
	var currentPageTemplate = template.substring(template.indexOf('<!-- CurrentPage.Start -->')+'<!-- CurrentPage.Start -->'.length, template.indexOf('<!-- CurrentPage.End -->'))

	var pages = []
	fs.readdirSync(path.resolve(docsDir), {withFileTypes:true}).forEach(function (entry) {
		if (entry.isFile() && entry.name != 'index.md' && path.extname(entry.name) == '.md') {
			pages.push(path.basename(entry.name, '.md'))
		}
	})
	
	var menu = []
	pages.forEach(function (page) {menu.push(menuLinkTemplate.replace(/\$\{Page\}/g, page))})
	template = template.slice(0, template.indexOf('<!-- MenuLink.Start -->')) + menu.join('') + template.slice(template.indexOf('<!-- MenuLink.End -->')+'<!-- MenuLink.End -->'.length)

	return function (page) {
		if (page == 'index') {return template.slice(0, template.indexOf('<!-- CurrentPage.Start -->')) + '' + template.slice(template.indexOf('<!-- CurrentPage.End -->')+'<!-- CurrentPage.End -->'.length)}
		return template.slice(0, template.indexOf('<!-- CurrentPage.Start -->')) + currentPageTemplate.replace(/\$\{Page\}/g, page) + template.slice(template.indexOf('<!-- CurrentPage.End -->')+'<!-- CurrentPage.End -->'.length)
	}
}

function GeneratePage (inFile, outFile, header) {
	fs.writeFileSync(outFile, style+'\n\n'+header+'\n\n'+fs.readFileSync(inFile, 'utf8').replace(/#+\s(Table of Contents|toc|table-of-contents)/ig, ''), 'utf8')
}

function GenerateIndex (docsDir, outFile, header) {
	var files = [], index = []
	fs.readdirSync(path.resolve(docsDir), {withFileTypes:true}).forEach(function (entry) {
		if (entry.isFile() && entry.name != 'index.md' && path.extname(entry.name) == '.md') {
			files.push(entry.name)
		}
	})

	files.sort(function (a, b) {return a-b}).forEach(function (file) {
		console.log(file)
		var header = '### ['+path.basename(file, '.md')+']('+path.basename(file)+' )'+'\n'
		var contents  = header + GenerateTOC(path.resolve(docsDir, file))
		contents = remark().use(collapse, {test: path.basename(file, '.md'), summary: path.basename(file, '.md')}).processSync(contents).toString()
		contents = contents.replace(/### \[.*\]\(.*\)/, '')
		contents = contents.replace(/\<summary\>(.*)\<\/summary\>/, function (match, p1) {
			return `<summary><a href="${p1}.md">${p1}</summary>`
		})
		index.push(contents.trim())
	})
		
	index = index.join('\n\n')
	
	if (typeof outFile !== 'undefined') {
		header = typeof header !== 'undefined' ? header : ''
		fs.writeFileSync(path.resolve('dist', 'docs', 'index.md'), style+'\n\n'+header+'\n\n'+index, 'utf8')
	} else {
		return index
	}
}

function GenerateTOC (file) {
	var contents = remark().use(toc).processSync(vfile.readSync(file))
	contents = String(contents)
	var match = contents.match(/(#+)\s(Table of Contents|toc|table-of-contents)/)
	if (match != null) {
		contents = contents.slice(match.index).replace(match[0], '')
		match = contents.match(match[1])
		if (match != null) {
			contents = contents.slice(0, match.index).replace(/\(#/g, '('+path.basename(file)+'#').trim()
			contents = contents.replace(/\-\s*\[(Static|Instance).*\].*\n/g, '').replace(/\n{2}/g, '').replace(/ {4}\- {3}/g, '- ').trim()
			return contents
		}
	}
	return ''
}