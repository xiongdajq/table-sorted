var ascending_or_descending = [];
var ti_tmp = -1, hj_tmp = -1;

function doIt() {
	$("table").each(function (i) {
		$("table").eq(i).find("tbody tr:odd").css("background-color", "#DDDDDD");
		$("table").eq(i).find("tbody tr:even").css("background-color", "#FFFFFF");
		ascending_or_descending[i] = [];
		$(this).find("th").each(function (j) {
			$(this).click(function () {
				sort(i, j);
			});
		});
	});
}

function sort(ti, hj) {
	remove_class(ti);
	click_another(ti, hj);
	if (ascending_or_descending[ti][hj] != false) ascending_or_descending[ti][hj] = false;
	else ascending_or_descending[ti][hj] = true;
	var trs = $("table").eq(ti).find("tr").has("td").toArray();
	if (ascending_or_descending[ti][hj] == false) {
		$("table").eq(ti).find("th").eq(hj).addClass("change_background_image_as");
		ascending(ti, hj, trs);
	} else {
		$("table").eq(ti).find("th").eq(hj).addClass("change_background_image_des");
		descending(ti, hj, trs);
	}
	display(ti, trs);
	set_td_background_color(ti);
}
function set_td_background_color(ti) {
	$("table").eq(ti).find("tbody tr:odd").css("background-color", "#DDDDDD");
	$("table").eq(ti).find("tbody tr:even").css("background-color", "#FFFFFF");
}
function display(ti, trs) {
	for (var i = 0; i < trs.length; i++) {
		$("table").eq(ti).find("tbody").append(trs[i]);
	}
}
function click_another(ti, hj) {
	if (ti_tmp != ti || hj_tmp != hj) ascending_or_descending[ti][hj] = undefined;
	ti_tmp = ti;
	hj_tmp = hj;
}
function ascending(ti, hj, trs) {
	trs.sort(function(a, b) {
		return $(a).find("td").eq(hj).text().localeCompare($(b).find("td").eq(hj).text());
	});
}
function descending(ti, hj, trs) {
	trs.sort(function(a, b) {
		return $(b).find("td").eq(hj).text().localeCompare($(a).find("td").eq(hj).text());
	});
} 
function remove_class(ti) {
	$("table").eq(ti).find("th").removeClass("change_background_image_as");
	$("table").eq(ti).find("th").removeClass("change_background_image_des");
}

doIt();
